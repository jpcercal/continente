import {
  LS_KEYS,
  WIDGET_STATE,
  WIDGET_HTML_TEMPLATE,
  ICONS,
  PHONE_WIDTH_PX,
  SELECTORS,
  URLS,
} from './constants';
import fetchSubtotal from './fetchSubtotal';
import { Product, CartItem, ScrapeResult } from './interfaces';
import { scrape } from './scrape';
import type { WidgetState } from './types';

export function initShoppingList(
  items: Product[],
  initialSubtotal: string,
): void {
  // Reactive state
  let cart: Record<string, CartItem> = JSON.parse(
    localStorage.getItem(LS_KEYS.CART) ?? '{}',
  );
  let winState: WidgetState =
    (localStorage.getItem(LS_KEYS.WIDGET) as WidgetState) ||
    WIDGET_STATE.NORMAL;
  let openCats = new Set<string>();
  let subtotalStr = initialSubtotal;
  let searchTerm = '';
  let debounceTmr: number;
  let firstRender = true;

  let host: HTMLDivElement;
  let win: HTMLElement;
  let memoRect: { w: number; h: number; l: string; t: string } = {
    w: 0,
    h: 0,
    l: '0px',
    t: '0px',
  };
  let dragState = {
    active: false,
    x: 0,
    y: 0,
    ox: 0,
    oy: 0,
  };

  // Mount and initial render
  host = document.createElement('div');
  host.id = 'sl-host';
  document.body.appendChild(host);
  render();

  // ── RENDER ────────────────────────────────────────────────────────
  function buildView(): {
    title: string;
    searchVal: string;
    categories: {
      name: string;
      items: { name: string; added: boolean; icon?: string }[];
      open: boolean;
    }[];
  } {
    const grouped: Record<
      string,
      { name: string; added: boolean; icon?: string }[]
    > = {};
    const term = searchTerm.toLowerCase();

    items.forEach((p) => {
      if (term && !p.name.toLowerCase().includes(term)) return;
      if (!grouped[p.category]) grouped[p.category] = [];
      grouped[p.category].push({
        name: p.name,
        added: !!cart[p.name],
        icon: p.icon,
      });
    });

    const categories = Object.keys(grouped)
      .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }))
      .map((cat) => {
        const its = grouped[cat].sort((a, b) =>
          a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }),
        );
        if (firstRender && its.some((i) => i.added)) openCats.add(cat);
        return { name: cat, items: its, open: openCats.has(cat) };
      });

    return {
      title: `Shopping Cart${subtotalStr ? ` (${subtotalStr})` : ''}`,
      searchVal: searchTerm,
      categories,
    };
  }

  function render(): void {
    host.innerHTML = (window as any).Mustache.render(
      WIDGET_HTML_TEMPLATE,
      buildView(),
    );
    win = host.firstElementChild as HTMLElement;
    bindEvents();
    applyPhoneSize();
    if (winState === WIDGET_STATE.MIN) minimise(true);
    if (winState === WIDGET_STATE.FULL) maximise(true);
    const minBtn = win.querySelector('#sl-min') as HTMLElement;
    minBtn.textContent =
      winState === WIDGET_STATE.MIN ? ICONS.RESTORE : ICONS.MINIMIZE;
    firstRender = false;
  }

  // ── LAYOUT & DRAG ────────────────────────────────────────────────
  function applyPhoneSize(): void {
    const w = Math.min(PHONE_WIDTH_PX, window.innerWidth * 0.9);
    const h = Math.floor(window.innerHeight * 0.8);
    Object.assign(win.style, {
      width: `${w}px`,
      height: `${h}px`,
      left: `${(window.innerWidth - w) / 2}px`,
      top: `${(window.innerHeight - h) / 2}px`,
    });
  }

  function startDrag(e: MouseEvent): void {
    dragState.active = true;
    dragState.x = e.clientX;
    dragState.y = e.clientY;
    dragState.ox = parseFloat(win.style.left) || 0;
    dragState.oy = parseFloat(win.style.top) || 0;

    const onMove = (ev: MouseEvent): void => {
      if (!dragState.active) return;
      win.style.left = `${dragState.ox + ev.clientX - dragState.x}px`;
      win.style.top = `${dragState.oy + ev.clientY - dragState.y}px`;
    };

    const onUp = (): void => {
      dragState.active = false;
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    e.preventDefault();
  }

  // ── EVENT BINDING ────────────────────────────────────────────────
  function bindEvents(): void {
    (win.querySelector('#sl-min') as HTMLElement).onclick = (): void =>
      toggleMin();
    (win.querySelector('#sl-max') as HTMLElement).onclick = (): void =>
      toggleFull();
    (win.querySelector('#sl-sync') as HTMLElement).onclick =
      (): Promise<void> => syncWithCart();

    const searchInput = win.querySelector('#sl-search') as HTMLInputElement;
    const clearBtn = win.querySelector('#sl-clear') as HTMLElement;

    searchInput.oninput = (): void => {
      clearTimeout(debounceTmr);
      debounceTmr = window.setTimeout((): void => {
        searchTerm = searchInput.value.trim();
        render();
      }, 1500);
    };

    clearBtn.onclick = (): void => {
      searchTerm = '';
      searchInput.value = '';
      render();
      searchInput.focus();
    };

    document.onkeydown = (e: KeyboardEvent): void => {
      if (e.key === 'Tab') {
        e.preventDefault();
        searchInput.focus();
      }
    };

    const header =
      winState === WIDGET_STATE.MIN
        ? win
        : (win.querySelector('#sl-header') as HTMLElement);
    header.onmousedown = (e: MouseEvent): void => startDrag(e);

    win.querySelectorAll('.sl-acc-header').forEach((h) => {
      const el = h as HTMLElement;
      el.onclick = (): void => {
        const cat = el.dataset.cat!;
        openCats.has(cat) ? openCats.delete(cat) : openCats.add(cat);
        render();
      };
    });

    win.querySelectorAll('.sl-tile').forEach((t) => {
      const tile = t as HTMLElement;
      tile.onclick = (): Promise<void> => handleTile(tile.dataset.name!);
    });
  }

  // ── WINDOW MODE ──────────────────────────────────────────────────
  function saveRect(): { w: number; h: number; l: string; t: string } {
    return {
      w: win.offsetWidth,
      h: win.offsetHeight,
      l: win.style.left,
      t: win.style.top,
    };
  }

  function applyRect(r: { w: number; h: number; l: string; t: string }): void {
    Object.assign(win.style, {
      width: `${r.w}px`,
      height: `${r.h}px`,
      left: r.l,
      top: r.t,
    });
  }

  function minimise(initial = false): void {
    if (!initial && winState === WIDGET_STATE.FULL) restoreFull();
    memoRect = saveRect();
    win.classList.add('sl-min');
    win.classList.remove('sl-full');
    Object.assign(win.style, { width: '300px', height: '48px' });
    winState = WIDGET_STATE.MIN;
    localStorage.setItem(LS_KEYS.WIDGET, winState);
  }

  function restoreMin(): void {
    win.classList.remove('sl-min');
    applyRect(memoRect);
    winState = WIDGET_STATE.NORMAL;
    localStorage.setItem(LS_KEYS.WIDGET, winState);
  }

  function maximise(initial = false): void {
    if (!initial && winState === WIDGET_STATE.MIN) restoreMin();
    memoRect = saveRect();
    Object.assign(win.style, {
      left: '2vw',
      top: '2vh',
      width: '96vw',
      height: '95vh',
    });
    win.classList.add('sl-full');
    winState = WIDGET_STATE.FULL;
    localStorage.setItem(LS_KEYS.WIDGET, winState);
  }

  function restoreFull(): void {
    applyRect(memoRect);
    win.classList.remove('sl-full');
    winState = WIDGET_STATE.NORMAL;
    localStorage.setItem(LS_KEYS.WIDGET, winState);
  }

  function toggleMin(): void {
    winState === WIDGET_STATE.MIN ? restoreMin() : minimise();
  }

  function toggleFull(): void {
    winState === WIDGET_STATE.FULL ? restoreFull() : maximise();
  }

  // ── PROGRESS INDICATOR ───────────────────────────────────────────
  function showProgress(): void {
    win.classList.add('sl-loading');
  }
  function hideProgress(): void {
    win.classList.remove('sl-loading');
  }

  // ── TILE HANDLING ─────────────────────────────────────────────────
  async function handleTile(name: string): Promise<void> {
    showProgress();
    try {
      if (cart[name]) {
        delete cart[name];
        persist();
        return;
      }
      const prod = items.find((p) => p.name === name);
      if (!prod) return;
      const scrapes: ScrapeResult[] = [];
      for (const pp of prod.possibleProducts) {
        try {
          scrapes.push(await scrape(pp.link));
        } catch {}
      }
      if (!scrapes.length) {
        alert('Could not fetch price');
        return;
      }
      const best = scrapes.reduce((a, b) => (a.price < b.price ? a : b));
      const buyBtn = best.doc.querySelector(
        SELECTORS.ADD_BUTTON,
      ) as HTMLElement;
      buyBtn?.click();
      scrapes.forEach((s) => s.iframe.remove());
      cart[name] = { link: best.link, price: best.price };
      persist();
    } finally {
      hideProgress();
    }
  }

  // ── SYNC WITH CART ───────────────────────────────────────────────
  async function syncWithCart(): Promise<void> {
    showProgress();
    try {
      localStorage.removeItem(LS_KEYS.CART);
      cart = {};
      const data = await fetch(URLS.MINI_CART, { credentials: 'include' }).then(
        (r): Promise<any> => r.json(),
      );
      const urls = new Set<string>();
      data.basket?.itemsSortedByBrand.forEach((b: any): void =>
        b.items.forEach((i: any): Set<string> => urls.add(i.productURL)),
      );
      items.forEach((p) => {
        const m = p.possibleProducts.find((pp) => urls.has(pp.link));
        if (m) cart[p.name] = { link: m.link, price: 0 };
      });
      openCats = new Set(
        Object.keys(cart).map(
          (name) => items.find((i) => i.name === name)?.category || '',
        ),
      );
      subtotalStr = await fetchSubtotal();
      persist();
    } catch (e) {
      console.error('Sync failed', e);
      alert('Failed to sync');
    } finally {
      hideProgress();
    }
  }

  // ── PERSIST & RENDER ─────────────────────────────────────────────
  function persist(): void {
    localStorage.setItem(LS_KEYS.CART, JSON.stringify(cart));
    render();
  }
}

import { SELECTORS } from './constants';
import { ScrapeResult } from './interfaces';

export function scrape(link: string): Promise<ScrapeResult> {
  return new Promise<ScrapeResult>((res, rej): void => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = link;
    document.body.appendChild(iframe);

    iframe.onload = (): void => {
      try {
        const d = iframe.contentDocument || iframe.contentWindow?.document;
        if (!d) throw new Error('No document');
        const p = d.querySelector(SELECTORS.PRICE_VALUE);
        if (!p) throw new Error('Price not found');
        const price = parseFloat(
          p.textContent!.trim().replace(/[€\s]/g, '').replace(',', '.'),
        );
        res({ link, price, doc: d, iframe });
      } catch (err) {
        rej(err);
      }
    };

    iframe.onerror = (): void => {
      rej(new Error('Iframe load error'));
    };
  });
}

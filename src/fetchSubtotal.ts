import { URLS, SELECTORS } from './constants';

export default async function fetchSubtotal(): Promise<string> {
  try {
    const resp = await fetch(URLS.CART_PAGE, { credentials: 'include' });
    const html = await resp.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const el = doc.querySelector(SELECTORS.CART_SUBTOT);
    return el?.textContent?.trim() ?? '';
  } catch {
    return '';
  }
}

import { loadMustache } from './loadMustache';
import fetchProducts from './products';
import fetchSubtotal from './fetchSubtotal';
import { initShoppingList } from './initShoppingList';

(async function bootstrap(): Promise<void> {
  await loadMustache();
  const [items, subtotal] = await Promise.all([
    fetchProducts(),
    fetchSubtotal(),
  ]);
  initShoppingList(items, subtotal);
})();

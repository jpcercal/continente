import { Product } from './interfaces';
import products from './products.json';

export default function fetchProducts(): Product[] {
  return products as Product[];
}

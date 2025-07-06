export interface PossibleProduct {
  link: string;
}

export interface Product {
  name: string;
  category: string;
  icon?: string;
  possibleProducts: PossibleProduct[];
}

export interface CartItem {
  link: string;
  price: number;
}

export interface ScrapeResult {
  link: string;
  price: number;
  doc: Document;
  iframe: HTMLIFrameElement;
}

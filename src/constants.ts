// import fs from 'fs';
import type { IconGlyphs } from './types';

export const ICONS: IconGlyphs = {
  MINIMIZE: '–',
  RESTORE: '🗖',
  MAXIMIZE: '⤢',
};

export const WIDGET_STATE = {
  MIN: 'min',
  NORMAL: 'normal',
  FULL: 'full',
} as const;

export const LS_KEYS = {
  CART: 'shoppingListCart',
  WIDGET: 'slWidgetMode',
} as const;

export const URLS = {
  MINI_CART:
    'https://www.continente.pt/on/demandware.store/Sites-continente-Site/default/Cart-MiniCartShow',
  CART_PAGE: 'https://www.continente.pt/checkout/carrinho/',
} as const;

export const SELECTORS = {
  PRICE_VALUE: '.product-detail .price .ct-price-value',
  ADD_BUTTON: '.product-detail .add-to-cart',
  CART_SUBTOT: '#cart-summary .ct-cart--summary-value',
} as const;

export const PHONE_WIDTH_PX = 431;

export const WIDGET_HTML_TEMPLATE = `
  <div id="sl-window">
    <div id="sl-header">
      <span class="sl-title">{{title}}</span>
      <div class="sl-search-wrap">
        <input id="sl-search" placeholder="Search ..." value="{{searchVal}}" />
        <button id="sl-clear">×</button>
      </div>
      <div id="sl-progress"></div>
      <div class="sl-buttons">
        <button id="sl-min">${ICONS.MINIMIZE}</button>
        <button id="sl-max">${ICONS.MAXIMIZE}</button>
      </div>
    </div>
    <div id="sl-body">
      {{#categories}}
        <div class="sl-accordion">
          <div class="sl-acc-header {{#open}}open{{/open}}" data-cat="{{name}}">
            <span>{{name}}</span>
            <span class="sl-arrow">{{#open}}▾{{/open}}{{^open}}▸{{/open}}</span>
          </div>
          {{#open}}
            <div class="sl-acc-body open">
              {{#items}}
                <div class="sl-tile {{#added}}added{{/added}}" data-name="{{name}}">
                  <div
                    class="sl-icon"
                    style="{{#icon}}background-image:url('{{icon}}'){{/icon}}"
                  ></div>
                  <div class="sl-label">{{name}}</div>
                </div>
              {{/items}}
            </div>
          {{/open}}
        </div>
      {{/categories}}
      {{^categories}}<div class="sl-empty">No products</div>{{/categories}}
    </div>
    <button id="sl-sync" class="sl-sync-btn">Sync with Cart</button>
  </div>
`.trim();

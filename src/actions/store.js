import {SAVE_PRODUCTS,SAVE_PRODUCT_DETAIL,SAVE_HEADER} from './types.js';

export const saveProducts = data => ({
  type: SAVE_PRODUCTS,
  data
});

export const saveProductDetail = data => ({
  type: SAVE_PRODUCT_DETAIL,
  data
});
export const saveHeader = data => ({
  type: SAVE_HEADER,
  data
});

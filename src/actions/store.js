import {
  SAVE_PRODUCTS,
  SAVE_PRODUCT_DETAIL,
  SAVE_HEADER,
  //TOOGLE_LOADING
} from './types.js';

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

/* export const toogleLoading = () => ({
  type: TOOGLE_LOADING
}) */

import {
  SAVE_PRODUCTS,
  SAVE_PRODUCT_DETAIL,
  SAVE_HEADER,
  SAVE_SIZE,
  CHANGE_PURCHASE,
  ADD_CART,
  LOAD_NAV,
  SAVE_RANDOM
  //TOOGLE_LOADING
} from './types.js';

export const saveProducts = data => ({
  type: SAVE_PRODUCTS,
  data
});

export const saveProductDetail = data => ({
  type: SAVE_PRODUCT_DETAIL,
  data: data.data
});
export const saveHeader = data => ({
  type: SAVE_HEADER,
  data
});

export const saveSizeAvailable = data => ({
  type: SAVE_SIZE,
  data
});

export const changePurchase = data => ({
  type: CHANGE_PURCHASE,
  data
});

export const addCart = data => ({
  type: ADD_CART,
  data
});

export const loadNav = (data,gender) => ({
  type: LOAD_NAV,
  gender,
  data: data
});

export const saveRandom = (data) => ({
  type: SAVE_RANDOM,  
  data: data.data
});

/* export const toogleLoading = () => ({
  type: TOOGLE_LOADING
}) */

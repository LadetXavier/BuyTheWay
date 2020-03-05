import {
  SAVE_PRODUCTS,
  SAVE_HEADER,
  SAVE_PRODUCT_DETAIL,  
} from 'src/actions/types.js';

const initialState = {
  
};

const shop = (state = initialState, action) => {
  switch(action.type) {
    case SAVE_PRODUCTS :
      return {
        ...state,
        listProducts: action.data
      };

    case SAVE_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.data
      };
    case SAVE_HEADER :
      return {
        ...state,
        listHeader: action.data
      };     
    default:
      return {
        ...state
      }

  }  
}

export default shop;

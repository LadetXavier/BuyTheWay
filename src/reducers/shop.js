import {
  SAVE_PRODUCTS,
  SAVE_HEADER,
  SAVE_PRODUCT_DETAIL,
  SAVE_SIZE,
  ADD_CART,
  CHANGE_PURCHASE  
} from 'src/actions/types.js';

const initialState = {
  cart:[],
  purchase:{
    size:'',
    quantity:1
  }
};

const shop = (state = initialState, action) => {
  switch(action.type) {
    case SAVE_PRODUCTS :
      return {
        ...state,
        listProducts: action.data.category
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
    case SAVE_SIZE :
      return {
        ...state,
        sizeAvailable: action.data
      }  
    // Temporary
    case ADD_CART :
      return {
        ...state,
        cart: [
          ...state.cart,
          action.data
        ]
      } 
    case CHANGE_PURCHASE :
      return {
        ...state,
        purchase: {
          ...state.purchase,
          ...action.data
        }
      }
    default:
      return {
        ...state
      }

  }  
}

export default shop;

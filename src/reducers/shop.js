import {
  SAVE_PRODUCTS,
  SAVE_HEADER,
  SAVE_PRODUCT_DETAIL,
  SAVE_SIZE,
  SAVE_CART,
  CHANGE_PURCHASE,
  LOAD_NAV,
  SAVE_RANDOM ,
  CHANGE_STATE_SHOP,
  SAVE_CHALLENGES,
  SAVE_TREND 
} from 'src/actions/types.js';

const initialState = {
  cart:null,
  purchase:{
    size:'',
    quantity:1
  },
  nav: {
    homme: [],
    femme: []
  }
};

const shop = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_NAV :          
      return {
        ...state,
        nav:{
          ...state.nav,
          [action.gender]: action.data.data.category 
        }
      }
    case SAVE_PRODUCTS :      
      return {
        ...state,
        listProducts: action.data.data.category
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
        sizeAvailable: action.data.data.skus
      }      
    case SAVE_CART :
      if(action.data.cart.length > 0) {
        return {
          ...state,        
          cart: action.data.cart[action.data.cart.length-1]
        } 
      }
      else {
        return {
          ...state,
          cart: null
        }
      }
    case CHANGE_PURCHASE :
      return {
        ...state,
        purchase: {
          ...state.purchase,
          ...action.data
        }
      }
    case SAVE_RANDOM :
      return {
        ...state,
        listRandom: action.data
      }
    case CHANGE_STATE_SHOP :
      return {
        ...state,
        ...action.data
      }
    case SAVE_CHALLENGES: 
    return {
      ...state,
      challenges: action.data
    }
    case SAVE_TREND: 
    return {
      ...state,
      trend: action.data
    }
    default:
      return {
        ...state
      }

  }  
}

export default shop;

import { SAVE_TOKEN, SAVE_USER, CHANGE_STATE } from 'src/actions/types.js';
import Cookies from 'js-cookie';

const initialState = {
  loadingLogged: true,
  connected: false,
  userData: null
}

const shop = (state = initialState, action) => {

  switch(action.type) {
    case SAVE_TOKEN :
      Cookies.set('access_token',action.token);
      Cookies.set('user_id',action.userID);
      return {
        ...state,
        connected: true        
      }
    case SAVE_USER :      
      return {
        ...state,
        userData: action.data
      }
    case CHANGE_STATE :
      return {
        ...state,
        ...action.data
      }
    default :
      return {
        ...state
      }
  }  
}

export default shop;

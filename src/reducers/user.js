import {REDIRECT,SAVE_TOKEN} from 'src/actions/types.js';
import Cookies from 'js-cookie';



const initialState = {
  connected: false

}

const shop = (state = initialState, action) => {
  
  switch(action.type) {
    case SAVE_TOKEN :
      Cookies.set('access_token',action.token);
      return {
        ...state,        
      }
    default :
      return {
        ...state
      }
  }
    
  
}

export default shop;

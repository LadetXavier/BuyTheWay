import {REDIRECT,SAVE_TOKEN} from 'src/actions/types.js';
import Cookies from 'js-cookie';

import {Redirect} from 'react-router-dom';

const initialState = {
  connected: false

}

const shop = (state = initialState, action) => {
  
  switch(action.type) {
    /* case REDIRECT :
      <Redirect to={action.url}/>
      return {
        ...state
      } */
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

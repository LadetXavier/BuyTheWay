import {REDIRECT} from 'src/actions/types.js';

import {Redirect} from 'react-router-dom';

const initialState = {
  connected: false

}

const shop = (state = initialState, action) => {
  
  switch(action.type) {
    case REDIRECT :
      <Redirect to={action.url}/>
      return {
        ...state
      }
    default :
      return {
        ...state
      }
  }
    
  
}

export default shop;

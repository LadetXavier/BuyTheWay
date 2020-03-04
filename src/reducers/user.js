import {Loading} from 'src/actions/types.js';

const initialState = {
  connected: false

}

const shop = (state = initialState, action) => {
  switch(action) {
    case Loading :
      return {
        ...state
      }
  }
    
  
}

export default shop;

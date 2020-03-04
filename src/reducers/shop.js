import {Loading} from 'src/actions/types.js';

const initialState = {

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

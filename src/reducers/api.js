import {API_START,API_END} from 'src/actions/types.js';

const initialState = {
  isLoading:true
}

const shop = (state = initialState, action) => {  
  switch(action.type) {
    case API_END :
      
      return {
        ...state,
        isLoading: false
      }
    default :
      return {
        ...state
      }
  }
    
  
}

export default shop;

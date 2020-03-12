import {API_START,API_END,API_ERROR} from 'src/actions/types.js';

const initialState = {
  isLoading:true,
  menLoading: true,
  womenLoading: true,
  isLogged: true,
  isSignUp: true
}

const shop = (state = initialState, action) => {  
  switch(action.type) {
    case API_START :      
      return {
        ...state,
        [action.payload]: true
      }
    case API_END :      
      return {
        ...state,
        [action.payload]: false
      }
    case API_ERROR : {
      return {
        ...state,
        error:true
      }
    }
    default :
      return {
        ...state
      }
  }
    
  
}

export default shop;

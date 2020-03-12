import axios from 'axios';
import Cookies from 'js-cookie';

import {API} from 'src/actions/types.js';
import {apiStart, apiEnd} from 'src/actions/apiActions.js';

const apiMiddleware = ({dispatch}) => next => action => {

  // because it's async, we spread the action to the next
  
  next(action);

  if( action.type !== API) return ;
  
  // destructuring payload
  const {
    url,
    method,
    data,       
    onSuccess,
    onFailure,
    callBack,
    label,
    headers    
  } = action.payload;
   
  // if the request's method is GET or DELETE, then it's params and not data 
  const dataOrParams = ["GET","DELETE"].includes(method) ? "params" : "data";  

  // default config
  axios.defaults.baseURL = "http://54.164.43.47:3000";
  axios.defaults.headers.common["Content-Type"]="application/json"; 

  let token = "";
  if(Cookies.get('access_token') !== undefined) {
    token = Cookies.get('access_token');
  }

  const fullHeaders = {
    ...headers,
    'Content-Type': 'application/json',
    'Authentification': `Bearer ${token}`,    
  }
  // dispatch an action for handling loader
  if(label) {
    dispatch(apiStart(label));
  }
  
  // send request with some parameters
  axios.request({
    url,
    method,
    headers: fullHeaders,
    [dataOrParams]: data
  })
  .then( reponse => {      
    // dispatch the action you want to do when the request ended 
    if(onSuccess(reponse) === undefined) {
      console.log('action maker undefined at url',url);
      console.log('reponse',reponse);
      console.log('onSuccess',onSuccess);

    } else {
      //console.log(reponse);      
      dispatch(onSuccess(reponse));
    }   
      
  })
  .catch( error => {
    // dispatch the action to handle api error and dispatch the action for failure    
    if(onFailure() !== undefined) {
      dispatch(onFailure());       
      console.error(error)
    }    
  })
  .finally( () => {
    // handle loading
   
    if(label) {      
      dispatch(apiEnd(label));
    }
  })  

  
}

export default apiMiddleware

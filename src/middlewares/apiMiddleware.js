import axios from 'axios';

import {API} from '../actions/types.js';
import {apiStart, apiEnd} from '../actions/apiActions.js';

const apiMiddleware = ({dispatch}) => next => action => {

  // because it's async, we spread the action to the next
  
  next(action);

  if( action.type !== API) return ;

  
  // destructuring payload
  const {
    url,
    method,
    data,
    token,   
    onSucess,
    onFailure,
    label,
    headers
  } = action.payload;

  // if the request's method is GET or DELETE, then it's params and not data 
  const dataOrParams = ["GET","DELETE"].includes(method) ? "params" : "data";  

  // default config
  axios.defaults.baseURL = "http://54.164.43.47:3000";
  axios.defaults.headers.common["Content-Type"]="application/json"; 

  // dispatch an action for handling loader
  if(label) {
    dispatch(apiStart(label));
  }

  // send request with some parameters
  axios.request({
    url,
    method,
    headers,
    [dataOrParams]: data
  })
  .then( reponse => {
    // dispatch the action you want to do when the request ended 
    if(onSucess(reponse) === undefined) {
      console.error('action maker undefined at url',url);
      console.error('reponse',reponse);
      console.error('onSuccess',onSuccess);

    } else {
      dispatch(onSucess(reponse));
    }   
  })
  .catch( error => {
    // dispatch the action to handle api error and dispatch the action for failure    
   
    dispatch(onFailure());       
    console.error(error)    
  })
  .finally( () => {
    // handle loading
   
    if(label) {      
      dispatch(apiEnd(label));
    }
  })  

  
}

export default apiMiddleware

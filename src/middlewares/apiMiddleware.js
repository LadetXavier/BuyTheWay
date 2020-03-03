import axios from 'axios';
import {dispatch} from 'redux';

import {API} from '../actions/types.js';
import {apiStart, apiEnd} from '../actions/apiActions.js';

const apiMiddleware = ({dispatch}) => next => action => {

  next(action);

  if( action.type != API) return ;

  const {
    url,
    method,
    data,
    token,   
    onSuccess,
    onFailure,
    label,
    headers
  } = action.payload;

  // if the request's method is GET or DELETE, then it's params and not data 
  const dataOrParams = ["GET","DELETE"].includes(method) ? "params" : "data";

  // default config
  axios.defaults.baseURL = window.location.origin;
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
    dispatch(onSuccess(reponse));
  })
  .catch( error => {
    // dispatch the action to handle api error and dispatch the action for failure
    //dispatch(apiError(error));
    dispatch(onFailure(error));
    
  })
  .finally( () => {
    // handle loading
    if(label) {
      dispatch(apiEnd(label));
    }
  })
  


  return next(action);
}

export default apiMiddleware
import {
  API,
  API_START,
  API_END,API_ERROR,
  CHANGE_STATE_API
} from './types.js';

export const apiStart = label => ({
  type: API_START,
  payload: label
});

export const apiEnd = label => ({
  type: API_END,
  payload: label
});

export const apiError = hasError => ({
  type: API_ERROR,
  error: hasError
});

export const changeState = value =>({
  type: CHANGE_STATE_API,
  data: value
})

// apiAction used to create call API
export const requestAction = ({
 url = "",
 method = "GET",
 data = null,
 token = null,
 headers = null,
 callBackSuccess = () => {},
 // onSuccess and onFailure are actionMaker that will be dispatched when the call API fail and success
 onSuccess = () => {},
 onFailure = () => {},
 // label is used to handle loading with apiEnd and apiStart action
 label = ""
}) => {
  return {
    type: API,
    payload: {
      url,
      method,
      token,
      data,
      headers,
      onSuccess,
      callBackSuccess,
      onFailure,
      label,
    }
  }
}

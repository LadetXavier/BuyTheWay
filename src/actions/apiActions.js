import {API,API_START,API_END} from './types/js';

export const apiStart = label => ({
  type: API_START,
  payload: label
});

export const apiEnd = label => ({
  type: API_END,
  payload: label
});

// apiAction used to create call API
export const apiAction = ({
 url = "",
 method = "GET",
 data = null,
 token = null,
 headers = null,
 // onSucess and onFailure are actionMaker that will be dispatched when the call API fail and success
 onSucess = () => {},
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
      onSucess,
      onFailure,
      label,
    }
  }
}

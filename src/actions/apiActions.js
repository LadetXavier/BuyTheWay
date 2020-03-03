import {API,API_START,API_END} from './types/js';

export const apiStart = label => ({
  type: API_START,
  payload: label
});

export const apiEnd = label => ({
  type: API_END,
  payload: label
});

export const apiAction = ({
 url = "",
 method = "GET",
 data = null,
 token = null,
 headers = null,
 onSucess = () => {},
 onFailure = () => {},
 label = ""
}) => {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      onSucess,
      onFailure,
      label,
    }
  }
}

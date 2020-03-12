import {
  REDIRECT,
  SAVE_TOKEN
} from './types.js';

export const redirect = (url) => ({
  type: REDIRECT,
  url: url
})

export const saveToken = (data) => ({
  type: SAVE_TOKEN,
  token: data.data.token
})

import {
  REDIRECT
} from './types.js';

export const redirect = (url) => ({
  type: REDIRECT,
  url: url
})

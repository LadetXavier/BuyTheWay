import {
  REDIRECT,
  SAVE_TOKEN,
  SAVE_USER,
  CHANGE_STATE_USER
} from './types.js';

export const redirect = (url) => ({
  type: REDIRECT,
  url: url
})

export const saveToken = (data) => ({
  type: SAVE_TOKEN,
  token: data.data.token,
  userID: data.data.userId
})

export const saveUser = (data) => ({  
  type:SAVE_USER,
  data: data.data
  
})

export const changeState = (state) => ({  
  type:CHANGE_STATE_USER,
  data: state  
})



import {combineReducers} from 'redux';

import shop from './shop.js';
import user from './user.js';
import api from './api.js';

const mainReducer = combineReducers({
  shop: shop,
  user: user,
  api
});

export default mainReducer

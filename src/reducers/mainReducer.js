import {combineReducers} from 'redux';

import shop from './shop.js';
import user from './user.js';

const mainReducer = combineReducers({
  shop: shop,
  user: user
});

export default mainReducer

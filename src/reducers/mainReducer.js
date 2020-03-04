import {combineReducers} from 'redux';

import shop from './shop.js';
import user from './user.js';

const mainReducer = combineReducers({
  shop,
  user
});

export default mainReducer

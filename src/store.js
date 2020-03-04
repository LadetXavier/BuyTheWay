import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'

import mainReducer from 'src/reducers/mainReducer.js';
import apiMiddleware from 'src/middlewares/apiMiddleware.js';

const enhancers = composeWithDevTools(
  applyMiddleware(
    apiMiddleware
  )
);

const store = createStore(mainReducer,enhancers);

export default store

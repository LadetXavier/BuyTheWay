import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'

import mainReducer from 'src/reducers/mainReducer.js';

const enhancers = composeWithDevTools(
  applyMiddleware(

  )
);

const store = createStore(mainReducer,enhancers);

export default store

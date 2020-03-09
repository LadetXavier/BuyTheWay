import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';

import {AppContainer as App} from 'src/container/components/AppContainer.js';
import store from 'src/store.js';

const rootReactElement = (
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>
);

const target = document.getElementById('root');
render(rootReactElement, target);

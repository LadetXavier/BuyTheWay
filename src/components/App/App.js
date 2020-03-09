import React from 'react';

import {HeaderContainer} from 'src/container/components/Header.js';
import Route from './Routes';
import 'src/assets/styles/reset.css';
import 'src/assets/styles/_vars.scss';
import 'src/assets/styles/main.scss';
import 'src/assets/FontAwesome/css/all.css';

// == Composant
const App = () => (
  <>
    <HeaderContainer />
    <Route />
  </>
);


// == Export
export default App;

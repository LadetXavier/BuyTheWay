import React from 'react';

import { HeaderContainer } from 'src/container/components/Header';
import Footer from 'src/components/Footer';
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
    <Footer />
  </>
);


// == Export
export default App;

import React, { useEffect } from 'react';


import { HeaderContainer } from 'src/container/components/Header.js';
import Footer from 'src/components/Footer';
import Route from './Routes';
import 'src/assets/styles/reset.css';
import 'src/assets/styles/_vars.scss';
import 'src/assets/styles/main.scss';
import 'src/assets/FontAwesome/css/all.css';
import Cookies from 'js-cookie';
import { getUserData } from 'src/globalFunc.js';


// == Composant
const App = ({ requestAction, connected, changeStateUser }) => {

  useEffect(() => {   
    // call api to get detail about product
    if(Cookies.get('user_id') !== undefined && Cookies.get('access_token') != undefined) {
      if(!connected) { changeStateUser({ connected:true }) }
      getUserData(requestAction);      
    } 
       
  },[connected]); 

  return (
  <>
    <HeaderContainer />
    <Route />
    <Footer />
  </>
  );
};

// == Export
export default App;

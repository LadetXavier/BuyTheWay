import React, { useEffect } from 'react';

import { HeaderContainer } from 'src/container/components/Header.js';
import Route from './Routes';
import 'src/assets/styles/reset.css';
import 'src/assets/styles/_vars.scss';
import 'src/assets/styles/main.scss';
import 'src/assets/FontAwesome/css/all.css';
import Cookies from 'js-cookie';
import { saveUser } from 'src/actions/user.js';


// == Composant
const App = ({ requestAction, connected, changeState }) => {

  useEffect(() => {   
    // call api to get detail about product
    if(Cookies.get('user_id') !== undefined && Cookies.get('access_token') != undefined) {
      if(!connected) { changeState({ connected:true }) }

      requestAction({
        url: `http://54.164.43.47:3000/user/${Cookies.get('user_id')}`,
        onSuccess: saveUser,
        label: 'userLoading',
      });
    }    
  },[connected]); 

  return (
  <>
    <HeaderContainer />
    <Route />
  </>
  );
};

// == Export
export default App;

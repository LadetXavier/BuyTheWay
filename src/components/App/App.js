import React, { useEffect } from 'react';


import { HeaderContainer } from 'src/container/components/Header.js';
import Footer from 'src/components/Footer';
import Route from './Routes';
import 'src/assets/styles/reset.css';
import 'src/assets/styles/_vars.scss';
import 'src/assets/styles/main.scss';
import 'src/assets/FontAwesome/css/all.css';
import Cookies from 'js-cookie';
import { saveUser, saveRankXP } from 'src/actions/user.js';


// == Composant
const App = ({ requestAction, connected, changeStateUser }) => {

  useEffect(() => {   
    // call api to get detail about product
    if(Cookies.get('user_id') !== undefined && Cookies.get('access_token') != undefined) {
      if(!connected) { changeStateUser({ connected:true }) }

      requestAction({
        url: `http://54.164.43.47:3000/user/${Cookies.get('user_id')}`,
        onSuccess: saveUser,
        label: 'userLoading',
      });

      requestAction({
        url: `http://54.164.43.47:3000/ranks`,
        onSuccess: saveRankXP,
        label: 'RankLoading',
      });
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

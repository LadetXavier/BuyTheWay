import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginContainer as Login } from 'src/container/components/Login.js';
import { SignUpContainer as SignUp } from 'src/container/components/SignUp.js';
import Cookies from 'js-cookie';



import 'src/assets/styles/icons.scss';


const Icons = ({ connected, userLoading, userData, changeStateUser }) => {
  
  const [hasAccount,setHasAccount] = useState(true);
  
  const handleSwitch = (e) => {    
    e.preventDefault();
    setHasAccount(!hasAccount);    
  }

  const handleSignOut = (e) => {
    e.preventDefault();
    Cookies.remove('user_id');
    Cookies.remove('access_token');
    changeStateUser({ connected: false });
  }
  let displayed = <> </>
  if(connected && !userLoading ) {    
   displayed = (
      <div className="user-content user-signIn">
        <p className="user-nickname">{userData.user.nickname}</p>
        <p className="user-rank">{userData.user.rank}</p>
        <div className= "user-gaugeContainer">
          <p className= "user-gaugeNumber">586 / 1200</p>
          <div className="user-gauge"></div>          
        </div>  
        <a href="" className= "user-fakeLink" onClick={handleSignOut}>Deconnexion</a>      
      </div>
    ); 
  }
  else if(hasAccount){
    displayed = (
      <div className="user-content min-heightContent">
        <Login />
        <a href="" className= "user-fakeLink" onClick={handleSwitch}>Pas de compte ?</a>
      </div>
    )
  }
  else {
    displayed = (
      <div className="user-content min-heightContent">
        <SignUp />
        <a href="" className= "user-fakeLink" onClick={handleSwitch}>Deja un compte ?</a>
      </div>
    )
  }

  return(
    <>
    <ul className="nav-icons">
      <li className="user"><Link to="/profil" className="far fa-user icons" />
        {displayed}
      </li>
      <li><Link to="/panier" className="far fa-shopping-cart icons" /></li>
      <li><Link to="/" className="far fa-search icons" /></li>
    </ul>
  </>
  );
}
  


export default Icons;

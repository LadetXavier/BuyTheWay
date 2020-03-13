import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {LoginContainer as Login} from 'src/container/components/Login.js';
import 'src/assets/styles/icons.scss';


const Icons = ({ connected, isLogged, userData}) => {
  console.log(userData);  
  const [hasAccount,setHasAccount] = useState(true);
  
  const handleSwitch = (e) => {
    console.log('oups',hasAccount);
    e.preventDefault();
    setHasAccount(!hasAccount);    
  }
  let displayed = <> </>
  if(connected) {
    displayed = (
      <div className="user-content user-signIn">
        <p>{userData.nickname}</p>
        <p>{userData.rank}</p>
        <p>586 / 1200</p>
      </div>
    );
  }
  else if(hasAccount){
    displayed = (
      <div className="user-content">
        <Login />
        <a href="" className= "user-fakeLink" onClick={handleSwitch}>Pas de compte ?</a>
      </div>
    )
  }
  else {
    displayed = (
      <div className="user-content">
        <Login />
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
      <li><Link to="/cart" className="far fa-shopping-cart icons" /></li>
      <li><Link to="/" className="far fa-search icons" /></li>
    </ul>
  </>
  );
}
  


export default Icons;

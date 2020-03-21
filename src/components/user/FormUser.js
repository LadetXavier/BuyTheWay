import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginContainer as Login } from 'src/container/components/Login.js';
import { SignUpContainer as SignUp } from 'src/container/components/SignUp.js';
import Cookies from 'js-cookie';

const FormUser = ({ connected, userLoading, userData, changeStateUser }) => {

  // hasAccount to switch between SignUp SignIn
  const [hasAccount,setHasAccount] = useState(true);  
  let maxXP = null; // used to calculate % 

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
  if(connected && !userLoading && userData.ranks !== undefined) { 
    maxXP = userData.ranks.find((rank) => {
      return rank.name === userData.user.rank;
    })
    maxXP = maxXP.breakpoint+1; 
    const purcentXp = userData.user.fidelity*100/maxXP; 
    
    
    displayed = (
      <>
        <p className="user-nickname">{userData.user.nickname}</p>
        <p className="user-rank">{userData.user.rank}</p>
        <div className= "user-gaugeContainer">
          <p className= "user-gaugeNumber">{userData.user.fidelity} / {maxXP} </p>
          <div className="user-gauge" style={{width: `${purcentXp}%`}}></div>          
        </div>  
        <a href="" className= "user-fakeLink" onClick={handleSignOut}>Deconnexion</a>      
      </>
    ); 
  }
  else if(hasAccount){
    displayed = (
      <>
        <Login />
        <a href="" className= "user-fakeLink" onClick={handleSwitch}>Pas de compte ?</a>
      </>
    )
  }
  else {
    displayed = (
      <>
        <SignUp />
        <a href="" className= "user-fakeLink" onClick={handleSwitch}>Deja un compte ?</a>
      </>
    )
  }

  return (
    <>
      {displayed}
    </>
  )
}

export default FormUser

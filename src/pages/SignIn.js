import React from 'react'

import {Redirect} from 'react-router-dom';
import { saveToken } from 'src/actions/user';

export const SignIn = ({requestAction, isSignUp}) => {

  let pseudo = React.createRef();
  let email = React.createRef();
  let password = React.createRef();


  function handleSignIn(event) {
    event.preventDefault();    
    requestAction({
        method: 'POST',
        url: `http://54.164.43.47:3000/user/signup`,
        data: JSON.stringify({
          nickname: pseudo.current.value,
          mail: email.current.value,
          password: password.current.value,
        }),
        onSuccess:saveToken,        
        label: 'isSignUp',
    }); 
  };

  return (
    <form action="" onSubmit={handleSignIn}>
      <label htmlFor="Pseudo">Pseudo</label>
      <input type="text" id="Pseudo" ref={pseudo}/>
      <label htmlFor="Email">Email</label>
      <input type="email" id="Email" ref={email}/>
      <label htmlFor="Password">Password</label>
      <input type="password" id="Password" ref={password}/>
      <button type="submit" >Creer un compte</button>
      {!isSignUp && <Redirect to="/"/>}
    </form>
  )
};



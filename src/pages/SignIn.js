import React from 'react'

import {redirect} from 'src/actions/user.js';

export const SignIn = ({requestAction}) => {

  let pseudo = React.createRef();
  let email = React.createRef();
  let password = React.createRef();


  function handleSignIn(event) {
    event.preventDefault();    
    console.log(pseudo.current.value);
    requestAction({
        method: 'POST',
        url: `/user/signup`,
        data: {
          nickname: pseudo.current.value,
          mail: email.current.value,
          password: password.current.value,
        },      
        onSucess: redirect ,
        label: 'SignIn',
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
    </form>
  )
};



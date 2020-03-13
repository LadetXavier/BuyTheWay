import React from 'react'
import { saveToken } from 'src/actions/user';

export const SignUp = ({requestAction, isSignUp}) => {

  let pseudo = React.createRef();
  let email = React.createRef();
  let password = React.createRef();


  function handleSignUp(event) {
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
    <form className= "user-form" action="" onSubmit={handleSignUp}>
      <label className = "user-label" htmlFor="Pseudo">Pseudo</label>
      <input className = "user-textInput" type="text" id="Pseudo" ref={pseudo}/>
      <label className = "user-label" htmlFor="Email">Email</label>
      <input className = "user-textInput" type="email" id="Email" ref={email}/>
      <label className = "user-label" htmlFor="Password">Password</label>
      <input className = "user-textInput" type="password" id="Password" ref={password}/>
      <button className = "user-submit" type="submit" >Creer un compte</button>      
    </form>
  )
};



import React from 'react'
import Cookies from 'js-cookie';

import { Redirect,Link } from 'react-router-dom';
import { saveToken } from 'src/actions/user';

const Login = ({requestAction,isLogged}) => {

  let email = React.createRef();
  let password = React.createRef();  

  const handleConnexion = (e) => {
    e.preventDefault();
    requestAction({
      method: 'POST',
        url: `http://54.164.43.47:3000/user/login`,
        data: JSON.stringify({          
          mail: email.current.value.toLowerCase(),
          password: password.current.value,
        }),
        onSuccess: saveToken,
        label: 'isLogged',
    })
  }

  return (
    <form className= "user-form" action="" onSubmit={handleConnexion}>    
      <label className = "user-label" htmlFor="Email">Email</label>
      <input className = "user-textInput" type="email" id="Email" ref={email}/>
      <label className = "user-label" htmlFor="Password">Password</label>
      <input className = "user-textInput" type="password" id="Password" ref={password}/>
      <button className = "user-submit" type="submit" >Se connecter</button>     
    </form>
  )
}

export default Login

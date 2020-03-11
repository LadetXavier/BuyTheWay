import React from 'react'
import Cookies from 'js-cookie';

import {Redirect} from 'react-router-dom';
import { saveToken } from 'src/actions/user';

const Login = ({requestAction,isLogged}) => {

  let email = React.createRef();
  let password = React.createRef();
  console.log(Cookies.get('access_token'));

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
    <form action="" onSubmit={handleConnexion}>    
    <label htmlFor="Email">Email</label>
    <input type="email" id="Email" ref={email}/>
    <label htmlFor="Password">Password</label>
    <input type="password" id="Password" ref={password}/>
    <button type="submit" >Se connecter</button>
    {!isLogged && <Redirect to="/tendances"/>}
  </form>
  )
}

export default Login

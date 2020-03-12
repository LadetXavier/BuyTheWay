import React, { useEffect } from 'react'
import Cookies from 'js-cookie';


import {saveUser} from 'src/actions/user.js';


export const User = ({requestAction,userData}) => {

 useEffect(() => {   
    // call api to get detail about product
    requestAction({
      url: `http://54.164.43.47:3000/user/${Cookies.get('user_id')}`,
      onSuccess: saveUser,
      label: 'userLoading',
    });
  },[]); 
  console.log(userData);

  return (
    <div>
      <h1>user</h1>
    </div>
  )
}


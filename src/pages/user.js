import React, { useEffect } from 'react'
import Cookies from 'js-cookie';
import {FormUserContainer as FormUser} from 'src/container/components/FormUser.js';

import 'src/assets/styles/user.scss';


import {saveUser} from 'src/actions/user.js';


export const User = ({requestAction,userData}) => {  

  return (
    <div className="FormUser-Container">
      <FormUser/>
    </div>
  )
}


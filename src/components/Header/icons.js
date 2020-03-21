import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FormUserContainer as FormUser} from 'src/container/components/FormUser.js';

import 'src/assets/styles/icons.scss';

const Icons = ({connected,userLoading}) => {

  let classUser = "user-content min-heightContent ";
  if(connected && !userLoading) {
    classUser = "user-content user-signIn";
  }

  return(
    <>
      <ul className="nav-icons">
        <li className="user">
          <Link to="/profil">
            <span className="far fa-user icons" />
          </Link>

          <div className={classUser}>
            <FormUser/>
          </div>
          
        </li>
        <li>
          <Link to="/cart">
            <span className="far fa-shopping-cart icons" />
          </Link>
        </li>
      </ul>
    </>

  );
}
  


export default Icons;

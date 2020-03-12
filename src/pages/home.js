/* eslint-disable import/prefer-default-export */
import React from 'react';
import Cookies from 'js-cookie';

import {LoginContainer as Login} from 'src/container/components/Login.js';


export const Home = () => (
  <>
    <div>
      {(Cookies.get('access_token') === undefined || Cookies.get('user_id') === undefined) && <Login/>}
    </div>
  </>
);

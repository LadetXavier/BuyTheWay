import React from 'react';
import { Link } from 'react-router-dom';

const Icons = () => (
  <>
    <ul className="nav-icons">
      <li><Link className="far fa-user icons" /></li>
      <li><Link className="far fa-shopping-cart icons" /></li>
      <li><Link className="far fa-search icons" /></li>
    </ul>
  </>
);

export default Icons;

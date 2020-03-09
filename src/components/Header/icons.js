import React from 'react';
import { Link } from 'react-router-dom';

const Icons = () => (
  <>
    <ul className="nav-icons">
      <li><Link to="/profil" className="far fa-user icons" /></li>
      <li><Link to="/cart" className="far fa-shopping-cart icons" /></li>
      <li><Link to="/" className="far fa-search icons" /></li>
    </ul>
  </>
);

export default Icons;

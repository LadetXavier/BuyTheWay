import React from 'react';
import { Link } from 'react-router-dom';


import './style.scss';

const Icons = () => (
  <>
    <ul className="social-icons">
      <li><Link to="/" className="fab fa-facebook-f icons" /></li>
      <li><Link to="/" className="fab fa-instagram icons" /></li>
      <li><Link to="/" className="fab fa-youtube icons" /></li>
      <li><Link to="/" className="fab fa-twitter icons" /></li>
      <li><Link to="/" className="fab fa-pinterest-p icons" /></li>
      <li><Link to="/" className="fab fa-tumblr icons" /></li>
    </ul>
  </>
);

export default Icons;

/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import { Link } from 'react-router';

import './styles.scss';
import '../../assets/FontAwesome/css/all.css';
import '../../assets/fonts/Roboto-Regular.ttf';
import Logo from './logo';

const Header = () => (
  <nav className="navbar">
    <a href="/"> <Logo /> </a>
    <ul className="nav-links">
      <li><a id="men" className="categories" href="/">HOMMES</a></li>
      <li><a id="women" className="categories" href="/">FEMMES</a></li>
      <li><a id="trend" className="categories" href="/">TENDANCES</a></li>
      <li><a id="challenges" className="categories" href="/">DEFIS</a></li>
    </ul>
    <ul className="nav-icons">
      <li><a className="far fa-user icons" /></li>
      <li><a className="far fa-shopping-cart icons" /></li>
      <li><a className="far fa-search icons" /></li>
    </ul>
  </nav>
);

export default Header;

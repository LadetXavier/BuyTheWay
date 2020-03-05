/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Animate from 'animate.css-react';
import 'animate.css/animate.css';


import 'src/assets/styles/header.scss';
import '../../assets/FontAwesome/css/all.css';
import '../../assets/fonts/Roboto-Regular.ttf';
import Logo from './logo';

const Header = () => (
  <nav className="navbar">
    <Link to="/"> <Logo /> </Link>
    { window.innerWidth > 1200 && (
    <Animate component="ul" className="nav-links" appear="fadeInDown" durationAppear={1750}>
      <div className="dropdown">
        <li><Link id="men" className="categories" to="/">HOMMES</Link></li>
        <div className="dropdown-content">
          <Link to="/">T-shirts</Link>
          <Link to="/">Chemises</Link>
          <Link to="/">Pulls & Sweats</Link>
          <Link to="/">Manteaux & Vestes</Link>
          <Link to="/">Pantalons</Link>
          <Link to="/">Jeans</Link>
          <Link to="/">Costumes</Link>
        </div>
      </div>
      <div className="dropdown">
        <li><Link id="women" className="categories" to="/">FEMMES</Link></li>
        <div className="dropdown-content">
          <Link to="/">T-shirts</Link>
          <Link to="/">Chemisiers</Link>
          <Link to="/">Pulls & Sweats</Link>
          <Link to="/">Manteaux & Vestes</Link>
          <Link to="/">Jeans</Link>
          <Link to="/">Pantalons</Link>
          <Link to="/">Jupes</Link>
          <Link to="/">Robes</Link>
        </div>
      </div>
      <li><Link id="trend" className="categories" to="/">TENDANCES</Link></li>
      <li><Link id="challenges" className="categories" to="/">DEFIS</Link></li>
    </Animate>
    ) }
    <ul className="nav-icons">
      <li><Link className="far fa-user icons" /></li>
      <li><Link className="far fa-shopping-cart icons" /></li>
      <li><Link className="far fa-search icons" /></li>
    </ul>
  </nav>
);

export default Header;

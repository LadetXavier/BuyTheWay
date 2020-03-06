/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';


import Animate from 'animate.css-react';
import 'animate.css/animate.css';

import Category from 'src/components/Header/category';
import Icons from 'src/components/Header/icons';
import 'src/assets/styles/header.scss';
import '../../assets/FontAwesome/css/all.css';
import '../../assets/fonts/Roboto-Regular.ttf';
import Logo from '../../assets/Pictures/logoBuyTheWay.png';
import handleMobileClick from '../../assets/functions/handleMobileFunctions.js';
//import Logo from './logo';

const Header = () => {
  const handleMediaQueryChange = (matches) => {
    // matches will be true or false based on the value for the media query
  };
  return (
    <>
      <MediaQuery maxDeviceWidth={1199} onChange={handleMediaQueryChange}>
        <nav className="navbar-mobile"> 
          <div type="button" className="far fa-bars icons dropleft" onClick={handleMobileClick} />
          <Link to="/"> <img src={Logo} alt="logo" className="logo-mobile" /> </Link>
          <ul className="">
            <Category class1="dropleft-content" class2="" />
          </ul>
          <Icons />
        </nav>
      </MediaQuery>


      <MediaQuery minDeviceWidth={1200} onChange={handleMediaQueryChange}>
        <nav className="navbar-desktop">
          <Animate component="ul" className="nav-links" appear="fadeInLeft" durationAppear={1750}>
            <Link to="/"> <img src={Logo} alt="logo" className="logo-desktop" /> </Link>
          </Animate>
          <Animate component="ul" className="nav-links" appear="fadeInDown" durationAppear={1750}>
            <Category class1="dropdown" class2="dropdown-content" />
          </Animate>
          <Animate component="ul" className="nav-links" appear="fadeInRight" durationAppear={1750}>
            <Icons />
          </Animate>
        </nav>
      </MediaQuery>
    </>
  );
};

export default Header;

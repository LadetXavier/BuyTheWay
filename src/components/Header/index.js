/* eslint-disable jsx-a11y/anchor-has-content */
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import Animate from 'animate.css-react';
import 'animate.css/animate.css';
import Category from 'src/components/Header/category';
import Icons from 'src/components/Header/icons';
import 'src/assets/styles/header.scss';
import Logo from 'src/assets/Pictures/logoBuyTheWay.png';

import {loadNav} from 'src/actions/shop.js';
import { apiError } from 'src/actions/apiActions.js';


const Header = ({requestAction,nav,womenLoading,menLoading}) => {    
  useEffect(() => {
    requestAction({
      url: `http://54.164.43.47:3000/gender/homme`,
      onSuccess: (data) => ( loadNav(data,'homme')),
      onFailure: apiError,
      label: 'menLoading',
    });

    requestAction({
      url: `http://54.164.43.47:3000/gender/femme`,
      onSuccess: (data) => ( loadNav(data,'femme')),
      label: 'womenLoading',
    });
  },[]);

  const handleMediaQueryChange = (matches) => {
    // matches will be true or false based on the value for the media query
  };
  const ref = React.createRef();
  const handleMobileClick = () => {    
    ref.current.classList.toggle('displayNone');
  };
  return (
    <>
      <MediaQuery maxDeviceWidth={1199} onChange={handleMediaQueryChange}>
        <nav className="navbar-mobile">
          <div type="button" className="far fa-bars icons dropleft" onClick={handleMobileClick} />
          <Link to="/"> <img src={Logo} alt="logo" className="logo-mobile" /> </Link>
          <ul className="">
            <Category ref={ref} class1="dropleft-content" class2="" data={{nav,womenLoading,menLoading}} />
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
            <Category ref={ref} class1="dropdown" class2="dropdown-content" data={{nav,womenLoading,menLoading}} />
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

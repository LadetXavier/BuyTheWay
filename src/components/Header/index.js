/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';


import Animate from 'animate.css-react';
import 'animate.css/animate.css';
import Category from 'src/components/Header/category';
import Icons from 'src/components/Header/icons';
import 'src/assets/styles/header.scss';
import Logo from 'src/assets/Pictures/logoBuyTheWay.png';


const Header = () => {
  const handleMediaQueryChange = (matches) => {
    // matches will be true or false based on the value for the media query
  };
  const ref = React.createRef();
  const handleMobileClick = () => {
    console.log(ref.current);
    ref.current.classList.toggle('displayNone');
  };
  return (
    <>
      <MediaQuery maxDeviceWidth={1199} onChange={handleMediaQueryChange}>
        <nav className="navbar-mobile">
          <div type="button" className="far fa-bars icons dropleft" onClick={handleMobileClick} />
          <Link to="/"> <img src={Logo} alt="logo" className="logo-mobile" /> </Link>
          <ul className="">
            <Category ref={ref} class1="dropleft-content" class2="" />
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
            <Category ref={ref} class1="dropdown" class2="dropdown-content" />
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

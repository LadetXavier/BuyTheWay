/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import Animate from 'animate.css-react';
import 'animate.css/animate.css';
import Category from 'src/components/Header/category';
import { IconsContainer as Icons } from 'src/container/components/Icons';
import 'src/assets/styles/header.scss';
import Logo from 'src/assets/Pictures/logoBuyTheWay.png';

import { loadNav } from 'src/actions/shop';
import { apiError } from 'src/actions/apiActions';


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
      onSuccess: (data) => (loadNav(data, 'femme')),
      label: 'womenLoading',
    });
  }, []);
  const ref = React.createRef();
  const handleMobileClick = () => {
    ref.current.classList.toggle('displayNone');
  };
  return (
    <>
      <MediaQuery maxDeviceWidth={1199}>
        <nav className="navbar-mobile">
          <div className="dropleft">
            <div className="far fa-bars icons" onClick={handleMobileClick} />
            <Link to="/"> <img src={Logo} alt="logo" className="logo-mobile" /> </Link>
            <Icons />
            <Category ref={ref} classLinkContainer="" classDropdown="dropleft-content displayNone" classListContainer={`displayNone width100vw`} data={{ nav, womenLoading, menLoading }} />
          </div>
        </nav>
      </MediaQuery>


      <MediaQuery minDeviceWidth={1200}>
        <nav className="navbar-desktop">
          <Animate component="div" className="nav-links" appear="fadeInLeft" durationAppear={1750}>
            <Link to="/"> <img src={Logo} alt="logo" className="logo-desktop" /> </Link>
          </Animate>
          <Animate component="div" className="nav-links" appear="fadeInDown" durationAppear={1750}>
            <Category ref={ref} classLinkContainer="dropdown" classDropdown="dropdown-content" data={{ nav, womenLoading, menLoading }} />
          </Animate>
          <Animate component="div" className="nav-links" appear="fadeInRight" durationAppear={1750}>
          <Icons />
          </Animate>
        </nav>
      </MediaQuery>
    </>
  );
};

export default Header;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import Icons from 'src/components/Footer/icons';

import './style.scss';


const Footer = () => {
  return (
    <>
      <footer className="footer">
        <form id="newsLetter">
          <label htmlFor="email">Entrez votre adresse email:</label>
          <input type="email" name="email" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" placeholder="email" />
          <button type="submit">OK</button>
        </form>
        <Icons />
      </footer>
    </>
  );
};

export default Footer;

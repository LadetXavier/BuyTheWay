/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';
import { saveChallenges } from 'src/actions/shop.js';
import Loader from 'src/components/Loader.js';
import { Link } from 'react-router-dom';
import Hierarchy from 'src/components/shop/Hierarchy';
import PropTypes from 'prop-types';
import AliceCarousel from 'react-alice-carousel';
import './challenge.scss';
import Cookies from 'js-cookie';
import error403 from 'src/assets/Pictures/error_403.png';
import tendance from 'src/assets/Pictures/tendance.jpg';
import defi from 'src/assets/Pictures/defi.jpg';
import tartanBanniere from 'src/assets/Pictures/tartan_beige_banniere.jpg';


const responsive = {
  0: { items: 1 },
  800: { items: 2 },
  1000: { items: 3 },
  1200: { items: 4 },
};

export const Challenge = ({
  requestAction,
  userData ,
  isLoading,
  changeState,
  challenges
}) => {

  useEffect(() => {
    // call api to get detail about product

    requestAction({
      url: `http://54.164.43.47:3000/challenges`,
      onSuccess: saveChallenges,
      label: 'isLoading',
    });

    return () => { changeState({ isLoading: true }); }
  }, []);
  console.log(challenges);
  let displayed = (<Loader />);

  if (!isLoading && challenges !== undefined) {
    displayed = (
      <div className="index">
        <img src={tartanBanniere} className="bannière" alt="" />
        <h1 className="challengeTitle">Challenge</h1>
      </div>
    );
  }

  return (
    <>
      {displayed}
    </>
  );
};

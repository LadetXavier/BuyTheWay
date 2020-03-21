/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';
import { saveTrend } from 'src/actions/shop.js';
import Loader from 'src/components/Loader.js';
import { Link } from 'react-router-dom';
import Hierarchy from 'src/components/shop/Hierarchy';
import PropTypes from 'prop-types';
import { FormPurchaseContainer as FormPurchase } from 'src/container/components/FormPurchase.js';
import AliceCarousel from 'react-alice-carousel';
import './trend.scss';
import Cookies from 'js-cookie';
import error403 from 'src/assets/Pictures/error_403.png';
import tendanceBanniere from 'src/assets/Pictures/tendance_banniere.jpg';


export const Trend = ({
  requestAction,
  isLoading,  
  trend,
  changeState 
}) => {
  useEffect(() => {
    // call api to get detail about product
    requestAction({
      url: `http://54.164.43.47:3000/products/tendance`,
      onSuccess: saveTrend,
      label: 'isLoading',
    });

    return () => { changeState({ isLoading: true }); }
  }, []);

  console.log(trend);

  let displayed = (<Loader />);

  if (!isLoading && trend !== undefined) {
    displayed = (
      <div className="index">
        <img src={tendanceBanniere} className="bannière" alt="" />
        <h1>Tendances</h1>
      </div>
    );
  }

  return (
    <>
      {displayed}
    </>
  );
};

Trend.propTypes = {
  requestAction: PropTypes.func.isRequired,
};

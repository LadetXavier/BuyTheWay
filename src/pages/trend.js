/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';
import { saveTrend } from 'src/actions/shop.js';
import Loader from 'src/components/Loader.js';
import { Link } from 'react-router-dom';
import Hierarchy from 'src/components/shop/Hierarchy';
import PropTypes from 'prop-types';
import { FormPurchaseContainer as FormPurchase } from 'src/container/components/FormPurchase.js';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Comments from 'src/components/shop/Comments.js';


export const Trend = ({
  requestAction,
  isLoading,  
  trend,
  changeState 
}) => {
  console.log(trend);
  useEffect(() => {
    // call api to get detail about product
    requestAction({
      url: `http://54.164.43.47:3000/products/tendance`,
      onSuccess: saveTrend,
      label: 'isLoading',
    });

    return () => { changeState({ isLoading:true }); }
  }, [Trend]);

  return (
    <div>
      <h1>Tendances</h1>
    </div>
  );
};

Trend.propTypes = {
  requestAction: PropTypes.func.isRequired,
};

/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';
import { saveProductDetail } from 'src/actions/shop.js';
import Loader from 'src/components/Loader.js';
import { Link } from 'react-router-dom';
import Hierarchy from 'src/components/shop/Hierarchy.js';
import PropTypes from 'prop-types';

import './product.scss';


export const Product = ({
  requestAction,
  isLoading,
  match,
  productDetail,
}) => {
  useEffect(() => {
    requestAction({
      url: `http://54.164.43.47:3000/products/${match.params.productId}`,
      onSucess: saveProductDetail,
      label: 'productsLoading',
    });
  }, []);

  // Display the loading icon by default
  let Displayed = () => (<Loader />);
  
  // Once datas are collected, display the dynamique content
  if (!isLoading) {
    const { product } = productDetail;
    Displayed = () => (
      <>
        <Hierarchy match={match} productName={product.name} />
        <section className="product">
          <img className="product-img" src={product.picture.picture1} alt="photo du produit" />
          <div className="product-description">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price} </p>
          </div>
        </section>
    </>
  );
  }
  // console.log ( displayed );
  return (
    <div>
      <Displayed />
    </div>
  );
};

Product.propTypes = {
  requestAction: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.string.isRequired
    })
  }).isRequired,
  productDetail: PropTypes.shape({
    name: PropTypes.string,
    picture: PropTypes.shape({
      picture1: PropTypes.string,
      picture2: PropTypes.string
    }),
    description: PropTypes.string,
    price: PropTypes.number
  })  
}

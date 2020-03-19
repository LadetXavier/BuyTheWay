/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import { saveProductDetail,saveSizeAvailable } from 'src/actions/shop.js';
import Loader from 'src/components/Loader.js';
import { Link } from 'react-router-dom';
import Hierarchy from 'src/components/shop/Hierarchy';
import PropTypes from 'prop-types';
import { FormPurchaseContainer as FormPurchase } from 'src/container/components/FormPurchase.js';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Comments from 'src/components/shop/Comments';

import './product.scss';

export const Product = ({
  requestAction,
  isLoading,
  match,
  productDetail,
  comments,
  sizeLoading,
  changeState
}) => {

  let [sizeFired, setSizeFired] = useState(false);
  let [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(null);
    // call api to get detail about product
    requestAction({
      url: `http://54.164.43.47:3000/products/${match.params.productId}`,
      onSuccess: saveProductDetail,
      label: 'isLoading',
    });    
    // call api to get all the comments      
    /* requestAction({
      url: `http://54.164.43.47:3000/comments/${match.params.productId}`,
      onSuccess: saveComments,
      label: 'commentsLoading',
    }); */

    return () => { changeState({isLoading: true}); }
  }, []);

  // effect used to launch axios request once the product is defined
  useEffect(() => {
    if(!sizeFired && product !== null) {
      setSizeFired(true);
      requestAction({
        url: `http://54.164.43.47:3000/skus-by-product/${product.sku}`,
        onSuccess: saveSizeAvailable,
        label: 'sizeLoading',
      });
    }   
  }, [product]);

  // Display the loading icon by default
  let displayed = (<Loader />);  

  // Once data are collected, display the dynamic content
  if(!isLoading && product === null && productDetail !== null) {
    setProduct(productDetail.product);
  }

  if ( product !== null) { 
    displayed = (
      <>
        <Hierarchy match={match} categoryName={product.category.type} productName={product.name} />
        <section className="product">
          <div className="product-picContainer">
            <AliceCarousel
              buttonsDisabled={true}
              responsive={1}
            >
              <img src={product.picture.picture1} className="product-pic" />
              <img src={product.picture.picture2} className="product-pic" />
            </AliceCarousel>
          </div>
          <div className="product-aside">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            
            <p className="product-price">
              <span className="far fa-cart-plus cart" />
              {product.price} €
            </p>

            { <FormPurchase item={product}/> }
          </div>
        </section>
        {/* <Comments comments={comments} /> */}
      </>
    );   
    if(sizeLoading) {
      

    }
  }

  return (
    <div>
      {displayed}
    </div>
  );
};

Product.propTypes = {
  requestAction: PropTypes.func.isRequired,
  sizeLoading: PropTypes.bool,
  isLoading: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  productDetail: PropTypes.shape({
    product: PropTypes.shape({
      name: PropTypes.string,
      category: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        gender: PropTypes.string,
      }),
      picture: PropTypes.shape({
        picture1: PropTypes.string,
        picture2: PropTypes.string,
      }),
      description: PropTypes.string,
      price: PropTypes.string,
    }),
  }),
};

Product.defaultProps = {
  productDetail: null,
  sizeLoading: null,
};

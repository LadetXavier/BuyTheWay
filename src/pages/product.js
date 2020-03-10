/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';
import { saveProductDetail,saveSizeAvailable } from 'src/actions/shop.js';
import Loader from 'src/components/Loader.js';
import { Link } from 'react-router-dom';
import Hierarchy from 'src/components/shop/Hierarchy';
import PropTypes from 'prop-types';
import { FormPurchaseContainer as FormPurchase } from 'src/container/components/FormPurchase.js';

import './product.scss';


export const Product = ({
  requestAction,
  isLoading,
  match,
  productDetail,
}) => {
  const mainPic = React.createRef();
  const secondPic = React.createRef();

  const handleChangePic = () => {
    mainPic.current.classList.toggle('product-mainImg');
    mainPic.current.classList.toggle('product-otherImg');
    secondPic.current.classList.toggle('product-mainImg');
    secondPic.current.classList.toggle('product-otherImg');
  };

  useEffect(() => {
    // call api to get detail about product
    requestAction({
      url: `http://54.164.43.47:3000/products/${match.params.productId}`,
      onSucess: saveProductDetail,
      label: 'isLoading',
    });

    // call api to get all the size available
    /*  requestAction({
      url: `http://54.164.43.47:3000/skus-by-product/${match.params.productId}`,
      onSuccess: saveSizeAvailable,
      label: 'sizeLoading',
    });  */
  }, []);

  // Display the loading icon by default
  let displayed = (<Loader />);
  console.log('detail du produit', productDetail);
  console.log(isLoading);

  // Once datas are collected, display the dynamique content
  if (!isLoading) {
    const { product } = productDetail;
    displayed = (
      <>
        <Hierarchy match={match} categoryName={product.category.name} productName={product.name} />
        <section className="product">
          <img className="product-mainImg" ref={mainPic} onClick={handleChangePic} src={product.picture.picture1} alt="Produit" />
          <img className="product-otherImg" ref={secondPic} onClick={handleChangePic} src={product.picture.picture2} alt="Produit" />
          <div className="product-aside">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">
              <span className="far fa-cart-plus cart"></span>
              {product.price} €
            </p>
            {/* <FormPurchase/> */}
          </div>
        </section>
    </>
  );
  } 
  // console.log ( displayed );
  return (
    <div>
      {displayed}
    </div>
  );
};

Product.propTypes = {
  requestAction: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  productDetail: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.shape({
      picture1: PropTypes.string.isRequired,
      picture2: PropTypes.string.isRequired
    }),
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

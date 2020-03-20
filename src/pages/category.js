/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';
import { saveProducts } from 'src/actions/shop.js';
import { apiError } from 'src/actions/apiActions.js';
import Loader from 'src/components/Loader.js';
import { Link } from 'react-router-dom';
import Hierarchy from 'src/components/shop/Hierarchy.js';
import ItemCard from 'src/components/shop/ItemCard.js';
import PropTypes from 'prop-types';
import './category.scss';

// page category that list products of a selected category
export const Category = ({
  match,
  requestAction,
  listProducts,
  isLoading,
  hasError,
  changeState
}) => {
  useEffect(() => {
    requestAction({
      url: `http://54.164.43.47:3000/category/${match.params.category}`,
      onSuccess: saveProducts,
      onFailure: apiError,
      label: 'isLoading',
    });

    return () => { changeState({ isLoading:true }); }
  }, [match]);
  // Display the loading icon by default
  let displayed = <Loader />;

  // Once datas are collected, display the dynamic content
  if (!isLoading) {
    if (hasError || listProducts === undefined) {
      displayed = <p>Un problème est survenu, il semblerait que notre serveur soit momentanément innacessible, veuillez réessayer plus tard.</p>;      
    }
    else {
      const categoryName = listProducts[0].category.name;
      let productArray = listProducts.map((itemCurrent) => (
          <ItemCard key={itemCurrent._id} item={itemCurrent} match={match} />
      ));
      displayed = (
        <>
          <Hierarchy match={match} categoryName={categoryName} />
          <section className="list-products">
            <div className="list-container">
              <div className="list-inline">
                {productArray}
              </div>
            </div>
          </section>
        </>
      );
    }
  }
  return (
    <div>
      {displayed}
    </div>
  );
};

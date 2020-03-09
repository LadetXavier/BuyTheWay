/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';
import { saveProducts } from 'src/actions/shop.js';
import { apiError } from 'src/actions/apiActions.js';
import Loader from 'src/components/Loader.js';
import { Link } from 'react-router-dom';
import Hierarchy from 'src/components/shop/Hierarchy.js';
//import ItemCard from 'src/components/shop/ItemCard.js';
import ItemCard from 'src/components/ItemCard';
import { data } from 'src/components/ItemCard/data';
import PropTypes from 'prop-types';
import './category.scss';

export const Category = ({
  match,
  requestAction,
  listProducts,
  isLoading,
  hasError
}) => {
  useEffect(() => {
    requestAction({
      url: `http://54.164.43.47:3000/category/${match.params.category}`,
      onSuccess: saveProducts,
      onFailure: apiError,
      label: 'productsLoading',
    });
  }, []);

  // Display the loading icon by default
  let displayed = <Loader />;

  // Once datas are collected, display the dynamic content
  if (!isLoading) {
    if (hasError) {
      //displayed = <p>Un problème est survenu, il semblerait que notre serveur soit momentanément innacessible, veuillez réessayer plus tard.</p>;
      //console.log(data.category[0].picture.picture1);
      displayed = (<ItemCard picture={data.category[0].picture.picture1} price={data.category[0].price} name={data.category[0].price} />);
    }
    /* else {
      const categoryName = listProducts[0].category.type;
      let productArray = listProducts.map((itemCurrent) => (
        <ItemCard key={itemCurrent._id} item={itemCurrent} />
      )); 

      displayed = (
        <>
          <Hierarchy match={match} categoryName={categoryName}/>
          <section className="list-products">
            {productArray}
          </section> 
        </>);
    } */
  }

  return (
    <div>
      {displayed}
    </div>
  );
};

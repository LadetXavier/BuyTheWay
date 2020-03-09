import React, {useEffect} from 'react'
import { saveProducts } from 'src/actions/shop.js';
import { apiError } from 'src/actions/apiActions.js';
import Loader from 'src/components/Loader.js';
import { Link } from 'react-router-dom';
import Hierarchy from 'src/components/shop/Hierarchy.js';
import ItemCard from 'src/components/shop/ItemCard.js';

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
      onSucess: saveProducts,
      onFailure: apiError,
      label: 'productsLoading',
    });
  }, []);

   // Display the loading icon by default
   let displayed = <Loader />;
  
   // Once datas are collected, display the dynamique content
   if (!isLoading) {
     if(hasError) {
       displayed = <p>Un problème est survenu, il semblerait que notre serveur soit momentanément innacessible, veuillez réessayer plus tard.</p>
     }
     else {
      const categoryName = listProducts[0].category.type;
     let productArray = listProducts.map((itemCurrent) => (
      <ItemCard key={itemCurrent._id} item={itemCurrent} />
    )); 

     displayed = 
       (<>
          <Hierarchy match={match} categoryName={categoryName}/>
          <section className="list-products">
           {productArray}
          </section> 
     </>);
    }       
  }

  return (
    <div>
      {displayed}
    </div>
  )
}



import React, {useEffect} from 'react';
import {saveProductDetail} from 'src/actions/store.js';
import Loader from 'src/components/Loader.js';
import {Link} from 'react-router-dom';
import Hierarchy from 'src/components/shop/Hierarchy.js';

import './product.scss';


export const product = ({requestAction,isLoading,match,productDetail}) => {

  useEffect (() => {
    requestAction({
      url: `http://54.164.43.47:3000/products/${match.params.productId}`,
      onSucess: saveProductDetail,
      label: "productsLoading"
    })
  }, [])
  
  let Displayed = () => (<Loader/>);
  if(!isLoading) {
    const product = productDetail.product;
    Displayed = () => (
      <>
        <Hierarchy match={match} productName={product.name}/>
        <section className="product">
          <img className="product-img" src={product.picture.picture1} alt="photo du produit"/>
          <div className="product-description">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            {/* <p>{product.price}</p> */}
          </div>
        </section>      
      </>
    )
  }
  //console.log ( displayed );
  return (

    <div>      
      <Displayed/>
    </div>
  )
}


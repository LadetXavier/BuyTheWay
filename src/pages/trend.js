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
        <article className="tendance">
          <img src={tendanceBanniere} className="banniere" alt="" />
          <aside className="aside">
            <h1 className="title">Votre attestation de déplacement toujours sur vous !</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit a turpis eu pharetra. Praesent cursus urna diam, ut pellentesque mauris ultrices vitae. Aliquam congue purus vitae tincidunt tincidunt. Integer sed ultrices dolor. Nunc ornare massa libero. Ut quam mauris, congue ac turpis ut, pulvinar hendrerit nibh. Cras blandit luctus quam, non facilisis elit sagittis sit amet.

            Nulla a molestie turpis, eget rutrum nunc. Maecenas facilisis magna eget molestie auctor. Morbi interdum quam non turpis commodo euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque libero turpis, condimentum non dui vitae, rutrum pulvinar dui. Integer vel turpis eget ipsum mollis condimentum. Praesent cursus sem tellus, consectetur tristique mauris efficitur quis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit a turpis eu pharetra. Praesent cursus urna diam, ut pellentesque mauris ultrices vitae. Aliquam congue purus vitae tincidunt tincidunt. Integer sed ultrices dolor. Nunc ornare massa libero. Ut quam mauris, congue ac turpis ut, pulvinar hendrerit nibh. Cras blandit luctus quam, non facilisis elit sagittis sit amet.
            </p>
          </aside>
        </article>
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

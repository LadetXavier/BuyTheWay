/* eslint-disable import/prefer-default-export */

import React, { useEffect } from 'react';
import { saveRandom } from 'src/actions/shop.js';
import Loader from 'src/components/Loader.js';
import { Link } from 'react-router-dom';
import Hierarchy from 'src/components/shop/Hierarchy';
import PropTypes from 'prop-types';
import AliceCarousel from 'react-alice-carousel';
import './home.scss';
import Cookies from 'js-cookie';
import error403 from 'src/assets/Pictures/error_403.png';
import tendance from 'src/assets/Pictures/tendance.jpg';
import defi from 'src/assets/Pictures/defi.jpg';

const responsive = {
  0: { items: 1 },
  800: { items: 2 },
  1000: { items: 3 },
  1200: { items: 4 },
};

export const Home = ({
  requestAction,
  isLoading,
  match,
  listRandom,
  changeState
}) => {

  useEffect(() => {
    // call api to get detail about product
    
    requestAction({
      url: `http://54.164.43.47:3000/random`,
      onSuccess: saveRandom,
      label: 'isLoading',
    });

    return () => { changeState({ isLoading:true }); }
  }, []);

  const addDefaultSrc = (e) => {
    e.target.src = error403;
    return e.target.src;
  };

  let displayed = (<Loader />);

  if (!isLoading && listRandom !== undefined ) {
    displayed = (

      <div className="index">
        <div className="video-container">
          <div className="video-foreground">
            <iframe width="1335" height="405" src="https://www.youtube.com/embed/QpBN1RKId5A?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=QpBN1RKId5A&mute=1" frameBorder="0"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
          </div>
        </div>
        <div className="TD">
          <p>Tendances</p>
          <Link to="/tendances">
            <img src={tendance} alt="" onError={addDefaultSrc} />
          </Link>
        </div>
        <div className="TD">
          <p>Défis</p>
          <Link to="/defi">
            <img src={defi} alt="" onError={addDefaultSrc} />
          </Link>
        </div>
        <div className="carousel">
          <AliceCarousel
            buttonsDisabled={true}
            dotsDisabled={false}
            responsive={responsive}
            infinite={false}
            mouseDragEnabled
            autoPlay
            autoPlayInterval={3500}
          >
            {listRandom.r.map((item) => (
              <Link to={`/shop/${item.category.gender}/${item.category.id}/${item._id}`}>
                <img src={item.picture.picture1} alt="" className="index-pic" key={item._id} onError={addDefaultSrc} />
              </Link>
            ))}
          </AliceCarousel>
        </div>
      </div>
    );
  }

  return (
    <>
      {displayed}
    </>
  );
};

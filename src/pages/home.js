/* eslint-disable import/prefer-default-export */

import React, { useEffect } from 'react';
import { saveRandom } from 'src/actions/shop.js';
import Loader from 'src/components/Loader.js';
import { Link } from 'react-router-dom';
import Hierarchy from 'src/components/shop/Hierarchy';
import PropTypes from 'prop-types';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './home.scss';
import Cookies from 'js-cookie';
import error403 from 'src/assets/Pictures/error_403.png';

const responsive = {
  0: { items: 1 },
  1024: { items: 4 },
};

export const Home = ({
  requestAction,
  isLoading,
  match,
  listRandom,
}) => {

  useEffect(() => {
    // call api to get detail about product
    requestAction({
      url: `http://54.164.43.47:3000/random`,
      onSuccess: saveRandom,
      label: 'isLoading',
    });
  }, [Home]);

  console.log(listRandom);

  const addDefaultSrc = (e) => {
    e.target.src = error403;
    return e.target.src;
  };

  let displayed = (<Loader />);

  if (!isLoading) {
    displayed = (
      
        <div className="index">
          <div className="video-container" >
            <div className="video-foreground">
              <iframe width="1335" height="405" src="https://www.youtube.com/embed/8lqrok_ECFM?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=8lqrok_ECFM&mute=1" frameBorder="0"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
            </div>
          </div>
          <div className="TD" id="tendances">
            <p>Tendances</p>
          </div>
          <div className="TD" id="défis">
            <p>Défis</p>
          </div>
          <AliceCarousel
            buttonsDisabled={true}
            dotsDisabled={false}
            responsive={responsive}
            infinite={true}
            mouseDragEnabled
            autoPlay
            autoPlayInterval={3500}
            onResized

          >
            {listRandom.r.map((item) => (
              <div key={item._id}>
                <img src={item.picture.picture1} alt="" className="index-pic" onError={addDefaultSrc} />
              </div>
            ))}
          </AliceCarousel>
          
        </div>
      
    );
  }

  /* let prevButton = document.getElementsByClassName("alice-carousel__prev-btn-item");
let nextButton = document.getElementsByClassName("alice-carousel__next-btn-item");
console.log(prevButton);
console.log(nextButton); */


  return (
    <>
      {displayed}
    </>
  );
};

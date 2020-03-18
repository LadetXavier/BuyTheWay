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
      <>
        <div className="index">
          <div id="tendances">
            <p>Tendances</p>
          </div>
          <div id="défis">
            <p>Défis</p>
          </div>
          <AliceCarousel
            buttonsDisabled={true}
            dotsDisabled={false}
            responsive={responsive}
            infinite={false}
          >
            {listRandom.r.map((item) => (
              <div key={item._id}>
                <img src={item.picture.picture1} alt="" className="index-pic" onError={addDefaultSrc} />
              </div>
            ))}
          </AliceCarousel>
        </div>
      </>
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

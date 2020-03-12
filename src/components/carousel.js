import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Gallery = () => {

  return (
    <AliceCarousel
      items={/**/}
      responsive={}
      autoPlayInterval={2000}
      autoPlayDirection="rtl"
      autoPlay={true}
      fadeOutAnimation={true}
      mouseTrackingEnabled={true}
      playButtonEnabled={true}
      disableAutoPlayOnAction={true}
    >
    <img src={} className="" />
    <img src={} className="" />
    <img src={} className="" />
    <img src={} className="" />
    </AliceCarousel>
  );
};

export default Gallery;

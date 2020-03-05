import React from 'react'

import loaderIcon from 'src/assets/Pictures/loading-icon-png-8.jpg';
import './Loader.scss';

const Loader = () => {
  return (
    <img src={loaderIcon} alt="" className="loader"/>
  )
}

export default Loader

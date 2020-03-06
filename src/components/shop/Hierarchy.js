import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// Component to display Hiearchy of the items
const Hierarchy = ({match, productName}) => {  
  const {gender,category,productID} = match.params   
  return (    
     <h1> {gender} / <Link to={`/${category}`}> {category}</Link> / {productName}</h1>
  )
}
export default Hierarchy

Hierarchy.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      gender: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      productId: PropTypes.string.isRequired
    })
  }).isRequired,
  productName: PropTypes.string.isRequired
}

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'src/assets/styles/hierarchy.scss';

// Component to display Hiearchy of the items
const Hierarchy = ({match, productName,categoryName}) => {  
  const gender = match.params.gender  
  return (
     <h1 className='hierarchy'> 
      {gender ? gender : null} / <Link to={`/shop/${gender}/${match.params.category}`}> {categoryName}</Link>  {productName ? `/ ${productName}` : null}
     </h1>
  )
}
export default Hierarchy;

Hierarchy.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      gender: PropTypes.string,
      category: PropTypes.string,
      productId: PropTypes.string,
    }),
  }),
  productName: PropTypes.string,
  categoryName: PropTypes.string,
};

Hierarchy.defaultProps = {
  match: {
    params: {
      gender: null,
      category: null,
      productId: null,
    },
  },
  productName: null,
  categoryName: null,
};

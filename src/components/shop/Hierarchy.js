import React from 'react'
import {Link} from 'react-router-dom';


const Hierarchy = (match,productName) => {
  console.log(match.match.params.gender);
  ({gender,category,productID} = match.match.params);
  //console.log(gender);
  return (
    <h1></h1>
    /* <h1><Link to={`/${gender}`}> {gender}</Link> / <Link to={`/${category}`}> {category}</Link> / {productName}</h1> */
  )
}

export default Hierarchy

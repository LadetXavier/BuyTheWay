import React from 'react'

const ItemCard = ({item, key}) => {
  const {picture,name,price,description} = item;
  return (
    <div className="list-products-card">
      <img src={picture.picture1} alt={description} className="list-products-img"/>
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  )
}

export default ItemCard

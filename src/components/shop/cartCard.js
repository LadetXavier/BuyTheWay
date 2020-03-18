import React from 'react'
import './cartCard.scss';

const CartCard = ({product}) => {  
  return (
    <div className="cartCard">
      <h2>{product.name}</h2>
      <img className="cartCard-img" src={product.picture} alt="" />
      <p>quantité : {product.quantity}</p>
      <p>Size : {product.size}</p>      
    </div>
  )
}

export default CartCard

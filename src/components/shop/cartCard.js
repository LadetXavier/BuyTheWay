import React from 'react'
import './cartCard.scss';

const CartCard = ({product}) => {
  console.log(product);
  return (
    <div className="cartCard">
      <h2>{product.product_id}</h2>
      <p>quantité : {product.quantity}</p>
      <p>Size : {product.size}</p>      
    </div>
  )
}

export default CartCard

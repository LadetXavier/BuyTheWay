import React from 'react'
import './cartCard.scss';

const CartCard = ({product}) => {
  console.log(product);
  return (
    <div className="cartCard">
      <h2>{product.name}</h2>
      <img src={product.picture} alt="" sizes="20%" srcset=""/>
      <p>quantité : {product.quantity}</p>
      <p>Size : {product.size}</p>      
    </div>
  )
}

export default CartCard

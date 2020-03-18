import React from 'react'
import './cartCard.scss';

const CartCard = ({product}) => { 
  
  const handleSuppression = () => {
    
  }

  return (
    <div className="cartCard">
      <h2>{product.name}</h2>
      <img className="cartCard-img" src={product.picture} alt="" />
      <p>quantité : {product.quantity}</p>
      <p>Size : {product.size}</p> 
      <button onClick={ handleSuppression } >Supprimer produit</button>     
    </div>
  )
}

export default CartCard

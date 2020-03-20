import React from 'react'
import './cartCard.scss';

const CartCard = ({product}) => {   
  const handleSuppression = () => {
    
  }

  return (
    <div className="cartCard">   
      <div className="cartCard-content">
        <h2 className="cartCard-title">{product.name}</h2>
        <img className="cartCard-img" src={product.picture} alt="" />
      </div>       
      <p><span className="cartCard-label">quantité :</span> <span className="cartCard-parameter">{product.quantity}</span></p>
      <p><span className="cartCard-label">Size :</span> <span className="cartCard-parameter">{product.size}</span></p>
      <div className="cartCard-priceContainer">
      <p className="cartCard-parameter">{product.price} €</p>
      {product.quantity > 1 && <p className="cartCard-label">Total: {product.price*product.quantity} € </p>}
      </div> 

      <button onClick={ handleSuppression } className="cartCard-suppr"> Supprimer </button>     
    </div>
  )
}

export default CartCard

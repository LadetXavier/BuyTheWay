import React from 'react'

import CartCard from 'src/components/shop/cartCard.js';

export const Cart = (cart) => {


  return (
    <div>
    <h1>Cart</h1>
      {cart.map((product) => (
        <CartCard product/>
      ))}
    </div>
  )
}



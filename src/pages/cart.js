import React from 'react'

import CartCard from 'src/components/shop/cartCard.js';

export const Cart = (cart) => {


  return (
    <div>
      {cart.map((product) => (
        <CartCard product/>
      ))}
    </div>
  )
}



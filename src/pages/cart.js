import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';

import CartCard from 'src/components/shop/cartCard.js';
import {saveCart} from 'src/actions/shop.js'
import Loader from 'src/components/Loader.js';
import Modal from 'src/components/shop/Modal.js';

export const Cart = ({cart, requestAction, isLoading, isValidate, changeCart}) => {


  let [modalOn,setModalOn] = useState(false);  

  let displayed = <Loader />;
  useEffect(() => {
    if(Cookies.get('user_id') !== undefined) {
      requestAction({
        url: `http://54.164.43.47:3000/cart/${Cookies.get('user_id')}`,
        onSuccess: saveCart,
        label: 'isLoading',
      })
    }
  }, [])

  const handleValidate = () => {
    setModalOn(true);
    requestAction({
      method:'POST',
      url: `http://54.164.43.47:3000/cart/validate/${cart.user}`,
      callBackSuccess: () => { changeState({cart:null}) },      
      label: 'isValidate',
    })
  }

  if(!isLoading && cart != null ) {
    console.log(cart);
    let cartList = cart.items.map((item) => (
      <CartCard key={ item._id } product={ item }/>
    ))    
    displayed = (
      <>
        {cartList}
        <p>{cart.total_price}</p>
        <button onClick={handleValidate}>Valider</button>
        { modalOn && <Modal text="Validation de la commande en cours" closer={setModalOn} timeout="3000" /> }
      </>
    )
    
  }
  else if (!isLoading) {
    displayed =( <p>Votre panier est vide</p> )
  }
  return (
    <div>    
      {displayed}
      
    </div>
  )
}



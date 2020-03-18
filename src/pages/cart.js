import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';

import CartCard from 'src/components/shop/cartCard.js';
import {saveCart} from 'src/actions/shop.js'
import Loader from 'src/components/Loader.js';
import Modal from 'src/components/shop/Modal.js';

export const Cart = ({cart, requestAction, isLoading, isValidate, changeCart, changeState}) => {


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
    return () => { changeState({ isLoading:true }); }
  }, [])

  const handleValidate = () => {
    setModalOn(true);
    requestAction({
      method:'POST',
      url: `http://54.164.43.47:3000/cart/validate/${cart.user}`,
      callBackSuccess: () => { changeCart({cart:null}) },      
      label: 'isValidate',
    })
  }

  if(Cookies.get('user_id') === undefined) {
    displayed = (<p>L'achat de produit est réservé aux utilisateurs connectés</p>);
  }

  if(!isLoading && cart !== null ) {    
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



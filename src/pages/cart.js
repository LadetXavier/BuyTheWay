import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';

import CartCard from 'src/components/shop/cartCard.js';
import {saveCart} from 'src/actions/shop.js'
import Loader from 'src/components/Loader.js';
import Modal from 'src/components/shop/Modal.js';
import { getUserData } from 'src/globalFunc.js';

export const Cart = ({cart, requestAction, isLoading, connected, changeCart, changeState, isValidate}) => {


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
  }, [connected])

  const handleValidate = () => {
    setModalOn(true);
    requestAction({
      method:'POST',
      url: `http://54.164.43.47:3000/cart/validate/${cart.user}`,         
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
        { modalOn && <Modal text="Votre commande a été validé" closer={setModalOn} timeout="5000" 
        onClose={
          () => { 
          changeCart({cart:null});
          getUserData(requestAction);
          }
        } 
        loading={ isValidate }/> }
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



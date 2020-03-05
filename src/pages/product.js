import React, {useEffect} from 'react';
import {saveProducts} from 'src/actions/store.js';
import Loader from 'src/components/Loader.js';


export const product = ({requestAction,isLoading}) => {

  useEffect (() => {
    requestAction({
      url: "http://54.164.43.47:3000/products",
      onSucess: saveProducts,
      label: "productsLoading"
    })
  }, [])


  console.log(isLoading);
  return (

    <div>
      <h1>product</h1>
      {isLoading && <Loader/>}
      
    </div>
  )
}


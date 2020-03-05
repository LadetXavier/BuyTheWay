import React, {useEffect} from 'react';
import {saveProducts} from 'src/actions/store.js';


export const product = ({requestAction}) => {

  useEffect (() => {
    requestAction({
      url: "http://54.164.43.47:3000/products",
      onSucess: saveProducts
    })
  }, [])

  return (

    <div>
      <h1>product</h1>
    </div>
  )
}


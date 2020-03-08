import React, {useEffect} from 'react'

const FormPurchase = ({sizeAvailable,addCart,changePurchase,match}) => {
  
  const handlePurchaseChange = (e) => {
    changePurchase({
      size: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault
    //addCart(match.params.productID);
  }

  return (
    <form name="purchase">
      <select name="size" id="size" onChange={handlePurchaseChange}>
        {sizeAvailable.map((size) => (
          <option value="">{size}</option>
        ))}
      </select>
      <input type="number" id="quantity" name="quantity" min="1" max="99" onChange={handlePurchaseChange}></input>
      <button type="submit" onSubmit={handleSubmit}>Acheter</button>
  </form>
  )
}

export default FormPurchase

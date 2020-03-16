import React, {useEffect,useState} from 'react'
import Cookies from 'js-cookie';

const FormPurchase = ({sizeAvailable,requestAction,match,item}) => {

  let displayed = <> </>
  const [sizeSelected, setSizeSelected] = useState("");
  const [quantitySelected, setQuantitySelected] = useState(1);
  
  
  const handleSizeChange = (e) => {
    setSizeSelected(e.target.value);    
  }

  const handleQuantityChange = (e) => {
    setQuantitySelected(e.target.value);
  }



  const handleSubmit = (e) => {
    e.preventDefault()
      
    requestAction({
      method:"POST",
      url:"http://54.164.43.47:3000/cart/add",
      data:{
        user: Cookies.get('user_id'),      
        items:[{
          product_id: item._id,
          size: sizeSelected,
          quantity: quantitySelected,
          price: item.price,
          sku: item.sku
        }]
      },
      label:'addCartLoading'    
    });
  }

  if(sizeAvailable !== undefined) {
    if(sizeSelected === "") {
      setSizeSelected(sizeAvailable[0].size);
    }    
    displayed = (
    <form name="purchase" onSubmit={handleSubmit}>
       <select name="size" id="size" onChange={handleSizeChange}>
        {sizeAvailable.map((size) => (
          <option value={size.size} key={size._id}> { size.size }</option>
        ))}
      </select> 
      <input type="number" id="quantity" name="quantity" min="1" max="99" onChange={handleQuantityChange} ></input>
      <button type="submit">Acheter</button>
    </form>
    )
  }

  return (
    <div>
      {displayed}
    </div>
    
  )
}

export default FormPurchase

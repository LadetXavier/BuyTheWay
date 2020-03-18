import React, {useEffect,useState} from 'react'
import Cookies from 'js-cookie';
import Modal from 'src/components/shop/Modal.js';


const FormPurchase = ({sizeAvailable,requestAction,item}) => {  
  let displayed = <> </>
  const [sizeSelected, setSizeSelected] = useState("");
  const [quantitySelected, setQuantitySelected] = useState(1);
  let [modalOn,setModalOn] = useState(false);  
  let modal = <> </>
  const handleSizeChange = (e) => {
    setSizeSelected(e.target.value);    
  }
  const handleQuantityChange = (e) => {
    setQuantitySelected(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOn(true);
    if(Cookies.get('user_id') !== undefined) { 
      modal=(<Modal text="L'article a été ajouté au panier" closer={setModalOn} timeout = "3000"/>)     
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
            sku: item.sku,
            name: item.name,
            picture: item.picture.picture1
          }]
        },
        label:'addCartLoading'    
      });
    }
    else {
      modal= <Modal text="L'achat de produit est réservé aux utilisateurs connectés" closer={setModalOn} timeout = "3000"/>
    }
  }

  if(sizeAvailable !== undefined) {
    if(sizeSelected === "") {
      setSizeSelected(sizeAvailable[0].size);
    }    
    displayed = (
      <>
    <form name="purchase" onSubmit={handleSubmit}>
       <select name="size" id="size" onChange={handleSizeChange}>
        { sizeAvailable.map((size) => (
          <option value={size.size} key={size._id}> { size.size }</option>
        ))}
      </select> 
      <input type="number" id="quantity" name="quantity" min="1" max="99" onChange={handleQuantityChange} ></input>
      <button type="submit">Acheter</button>
    </form>
    { modalOn && <Modal text="L'article a été ajouté au panier" closer={setModalOn} timeout = "3000"/> }
    </>
    )
  }

  return (
    <div>
      {displayed}
      {modalOn && modal}
    </div>
    
  )
}

export default FormPurchase

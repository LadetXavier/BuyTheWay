import React, {useEffect,useState} from 'react'
import Cookies from 'js-cookie';
import Modal from 'src/components/shop/Modal.js';


const FormPurchase = ({sizeAvailable,requestAction, item}) => {  
  let displayed = <> </>;
  const [sizeSelected, setSizeSelected] = useState("");
  const [quantitySelected, setQuantitySelected] = useState(1);
  let [modalOn,setModalOn] = useState(false);  
  let [modal,setModal] = useState(<></>);  
  let [stock,setstock] = useState(0);  
  
  const getStock = () => {
    let stockAvailable = sizeAvailable.find((size) => {
      return size.size === sizeSelected;
    })
    stockAvailable = stockAvailable.quantity;
    return (stockAvailable);
  }

  const handleSizeChange = (e) => {
    setSizeSelected(e.target.value);
    let newStock = getStock();
    setstock(newStock); 
    if( quantitySelected > newStock) {
      setQuantitySelected(newStock);
    }
  }
  const handleQuantityChange = (e) => {
    setQuantitySelected(e.target.value);
  }
  const handleSubmit = (e) => {    
    e.preventDefault();
    setModalOn(true);
    if(Cookies.get('user_id') !== undefined) { 
      setModal(<Modal text="L'article a été ajouté au panier" closer={setModalOn} timeout = "3000"/>)     
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
      setModal(<Modal text="L'achat de produit est réservé aux utilisateurs connectés" closer={setModalOn} timeout = "3000"/>);
    }
  }

  if(sizeAvailable !== undefined) {
    if(sizeSelected === "") {
      setSizeSelected(sizeAvailable[0].size);
      setstock(sizeAvailable[0].quantity);      
    }
    let quantity = null;
    if(stock > 0) {      
      quantity= (
      <>
        <input type="number" id="quantity" name="quantity" min="1" max={stock} onChange={handleQuantityChange} value={ quantitySelected }/>
        { quantitySelected >= stock && <p>Derniers articles en stock</p>}
      </>
        );
    }
    else {
      quantity= <p>Out of stock</p>
    }
    displayed = (
      <>
    <form name="purchase" onSubmit={handleSubmit}>
       <select name="size" id="size" onChange={handleSizeChange}>
        { sizeAvailable.map((size) => (
          <option value={size.size} key={size._id}> { size.size }</option>
        ))}
      </select> 
      {quantity}      
      <button type="submit">Acheter</button>
    </form>   
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

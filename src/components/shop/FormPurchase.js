import React, {useEffect,useState} from 'react'
import Cookies from 'js-cookie';
import Modal from 'src/components/shop/Modal.js';

// Component to handle adding product to cart
const FormPurchase = ({sizeAvailable,requestAction, item}) => {  
  let displayed = <> </>;
  //console.log(sizeAvailable);

  const [sizeSelected, setSizeSelected] = useState(""); 
  const [quantitySelected, setQuantitySelected] = useState(1);
  let [modalOn,setModalOn] = useState(false); // switch to activate modal 
  let [modal,setModal] = useState(<></>); // state to handle dynamic modal 
  let [stock,setstock] = useState(0);  
  
  //Function used to calculate stock available of the selected size
  const getStock = (sizeWanted) => {
    let stockAvailable = sizeAvailable.find((size) => {
      return size.size === sizeWanted;
    })
    stockAvailable = stockAvailable.quantity;
    return (stockAvailable);
  }

  // Handler size change
  const handleSizeChange = (e) => {
    setSizeSelected(e.target.value);
    let newStock = getStock(e.target.value);
    setstock(newStock); 
    // when we switch size, test if selected quantity is > to available stock
    if( quantitySelected > newStock) {
      setQuantitySelected(newStock);
    }
    else if (quantitySelected <= 0) {
      setQuantitySelected(1);
    }
  }
  const handleQuantityChange = (e) => {
    setQuantitySelected(e.target.value);
  }
  const handleSubmit = (e) => {    
    e.preventDefault();
    setModalOn(true);
    // If user connected then send a axios request, else error message
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
  // if axios request worked fine and it's the first time then we initialise state
  if(sizeAvailable !== undefined) {
    if(sizeSelected === "") {
      setSizeSelected(sizeAvailable[0].size);
      setstock(sizeAvailable[0].quantity);      
    }
    let quantity = null;
    // handling stock
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

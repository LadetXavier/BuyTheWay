import React, {useEffect,useState} from 'react'
import Cookies from 'js-cookie';
import Modal from 'src/components/shop/Modal.js';

// Material Ui import
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Input from "@material-ui/core/Input";

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
         <TextField
          id="standard-number"          
          type="number"
          value= { quantitySelected }
          onChange={handleQuantityChange}
          classes={{root:"product-input"}}
          input={<Input  classes={{input:"text-center"}}/>}
          InputLabelProps={{
            shrink: true,            
          }}
          inputProps={{
            min: "1", 
            max: stock,
            className: "text-center",
          }}          
        />        
        { quantitySelected >= stock && <p className="comment" >Derniers articles en stock</p>}
      </>
        );
    }
    else {
      quantity= <p className="comment-error" >Out of stock</p>
    }
    displayed = (
      <>
    <form name="purchase" onSubmit={handleSubmit}>
      <FormControl classes={{root: "product-input" }}>        
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          input={<Input  classes={{input:"text-center"}}/>}
          value={sizeSelected}
          onChange={handleSizeChange}
          
        >
        { // dynamic sizes
          sizeAvailable.map((size) => (          
          <MenuItem value={size.size} key={size._id}> { size.size }</MenuItem>
        ))}          
        </Select>
      </FormControl> 
      {quantity}     
      <p className="product-price">
        <span className="far fa-cart-plus cart" />
        {item.price} €
        {quantitySelected > 1 && <span className="comment-price" > Total price : {Math.round( quantitySelected*item.price * 10 + Number.EPSILON ) / 10} €</span>}
      </p> 
      <button type="submit" className="product-submit" >Acheter</button>
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

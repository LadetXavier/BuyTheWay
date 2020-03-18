import React, {useEffect} from 'react'
import 'src/assets/styles/modal.scss';
import Loader from 'src/components/Loader.js';    


const Modal = ({text=null,onValidate=null,closer=null, timeout=null, loading=null, onClose=()=>{}}) => {
  let displayed = <Loader/>
  const handleClose = () => {
    closer(false);
    onClose();
  } 
if( !loading || loading === null) {
  displayed = (
    <>
      <p> {text} </p>
      <button onClick={ handleClose }>Close</button>
      {onValidate !== null && <button onClick={ onValidate }></button>}
    </>
  )
  if(timeout != null) {
    setTimeout(() => {
      handleClose();
    },timeout);
  }  
}
  
  return (
    <>
      <div className="modal-bg">
        <div className="modal">
          {displayed}
        </div>
      </div>      
    </>
  )
}

export default Modal

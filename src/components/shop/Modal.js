import React, {useEffect} from 'react'
import 'src/assets/styles/modal.scss';
import Loader from 'src/components/Loader.js';    

// Component modal to display popup window
// text : text to display / onValidate: action linked to validate button
// closer: setState to close modal in parent / timeout: duration in ms to shut down modal
// loading: for dynamic modal that wait the end of a request
// onClose: callback called when closing the modal
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

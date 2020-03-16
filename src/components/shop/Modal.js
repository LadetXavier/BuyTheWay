import React, {useEffect} from 'react'
import 'src/assets/styles/modal.scss';


const Modal = ({text=null,onValidate=null,closer=null, timeout=null}) => {

  const handleClose = () => {
    closer(false);
  }

  useEffect(() => {
    if(timeout != null) {
      setTimeout(() => {
        handleClose();
      },timeout);
    }
    

  }, [])


  let displayed = (
    <>
      <p> {text} </p>
      <button onClick={handleClose}>Close</button>
      {onValidate !== null && <button onClick={onValidate}></button>}
    </>
  )  

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

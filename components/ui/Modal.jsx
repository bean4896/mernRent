import { useState } from "react";

const Modal = (props) => {
    return (
      <>
      <div className="backdrop" onClick={props.onConfirm}>
        <div className="modal">
          <h2
            className={props.titleClass}
          >
            {props.title}
          </h2>
          <button
            className={props.buttonClass}
            onClick={props.onConfirm}
          >
           {props.message}
          </button>
        </div>
        </div>
      </>
    );
    
  };

  export default Modal;
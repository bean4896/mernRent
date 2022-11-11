import { useState } from "react";

const Modal = (props) => {
    return (
      <>
      <div className="flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
        <div className="bg-[#f3f4f6] px-16 py-14 rounded-md text-center">
          <h2
            className={props.titleClass}
          >
            {props.title} + title
          </h2>
          <button
            className={props.buttonClass}
          >
           {props.message} + ss
          </button>
        </div>
        </div>
      </>
    );
    
  };

  export default Modal;
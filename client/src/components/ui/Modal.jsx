import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { IoClose } from "react-icons/io5";

const Modal = ({ onClose, children }) => {
  return ReactDOM.createPortal(
    // modal-overlay
    <div
      onClick={onClose}
      className="fixed top-0 left-0 w-full h-full
     bg-cyan-100 bg-opacity-75 z-20 flex flex-col justify-end sm:justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="sm:w-1/2 w-full min-h-[20%] p-6 bg-white border-2 border-cyan-600 
      flex flex-col justify-between items-center
      shadow-2xl text-cyan-600 sm:rounded-xl animate-reveal"
      >
        {/* close modal btn */}
        <IoClose
          className="text-2xl hover:scale-125 transition-all ease-in-out self-end mb-5 cursor-pointer"
          onClick={onClose}
        />

        <div className=" flex flex-col justify-center items-center gap-5">
          {/* modal content */}
          {children}
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;

import React from "react";

const Button = ({
  type,
  inverseColor,
  deleteBtn,
  onClick,
  children,
  className,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`${className} flex items-center justify-center p-2 text-center rounded-md 
      hover:font-semibold focus:font-semibold 
        hover:border-1 focus:border-1 border-cyan-600 ${
          inverseColor
            ? "bg-cyan-100 text-cyan-900 hover:bg-black hover:text-white"
            : deleteBtn
            ? "bg-red-400 border-none hover:bg-red-600 text-black"
            : "bg-gradient-to-r from-cyan-100 to-cyan-900 text-black"
        } `}
    >
      {children}
    </button>
  );
};

export default Button;

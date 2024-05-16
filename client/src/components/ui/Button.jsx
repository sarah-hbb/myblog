import React from "react";

const Button = ({
  type,
  size,
  inverseColor,
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
      className={`${className} flex items-center justify-center p-2 text-center rounded-md hover:font-semibold focus:font-semibold 
        hover:border-2 focus:border-2 border-cyan-600  ${
          inverseColor
            ? "bg-cyan-100 text-cyan-900 hover:bg-black hover:text-white"
            : "bg-gradient-to-r from-cyan-100 to-cyan-900 text-blac"
        } `}
    >
      {children}
    </button>
  );
};

export default Button;

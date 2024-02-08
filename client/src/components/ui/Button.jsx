import React from "react";

const Button = ({ type, size, inverseColor, onClick, children }) => {
  return (
    <button
      type="type"
      onClick={onClick}
      className={`p-2 rounded-md  ${
        inverseColor
          ? "bg-cyan-100 text-cyan-900 hover:bg-black hover:text-white"
          : "bg-gradient-to-r from-cyan-100 to-cyan-900 text-black"
      } `}
    >
      {children}
    </button>
  );
};

export default Button;

import React, { useState } from "react";

const Input = ({ label, type, onChange }) => {
  const [inputValue, setInputValue] = useState("");
  const changeHandler = (e) => {
    setInputValue(e.target.value);
    onChange(inputValue);
  };
  return (
    <div className="flex flex-col">
      <label className=" text-cyan-600 font-bold mb-1">{label}</label>
      <input
        type={type}
        value={inputValue}
        className=" rounded-md h-10 p-4 border-2 text-gray-400 border-gray-200 focus:border-cyan-600 outline-none"
        onChange={changeHandler}
      />
    </div>
  );
};

export default Input;

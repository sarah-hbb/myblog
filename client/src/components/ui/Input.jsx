import React from "react";

const Input = ({
  value,
  label,
  type,
  onChange,
  id,
  borderError,
  placeholder,
}) => {
  return (
    <div className="flex flex-col">
      <label className=" text-cyan-600 font-bold mb-1">{label}</label>
      <input
        placeholder={placeholder}
        id={id}
        type={type}
        value={value}
        className={`rounded-md h-10 p-4 border-2 text-gray-400 ${
          borderError ? "border-red-400" : " border-gray-200"
        } border-gray-200 focus:border-cyan-600 outline-none`}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default Input;

import React from "react";

const Input = ({
  className,
  value,
  label,
  type,
  onChange,
  id,
  borderError,
  placeholder,
  defaultValue,
}) => {
  return (
    <div className={`${className} flex flex-col w-full`}>
      <label className=" text-cyan-600 font-bold mb-1">{label}</label>
      <input
        placeholder={placeholder}
        id={id}
        type={type}
        value={value}
        defaultValue={defaultValue}
        className={`rounded-md h-10 p-4 border-2 text-gray-500 ${
          borderError ? "border-red-400" : " border-gray-200"
        } border-gray-200 focus:border-cyan-600 outline-none`}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default Input;

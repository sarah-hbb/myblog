import React from "react";

const Select = ({ label, options, value, onChange, className }) => {
  return (
    <div className={`${className} bg-green-100 w-full`}>
      {label && <label>{label}</label>}
      <select
        value={value}
        onChange={(e) => onChange(e)}
        className={`rounded-md h-10 p-1 text-cyan-600 outline-2
           border-2 border-gray-200 outline-cyan-600 w-full`}
      >
        {options.map((option, index) => (
          <option
            key={index}
            value={option.value}
            className="font-semibold"
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

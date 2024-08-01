import React from "react";

const Alert = ({ children, status }) => {
  return (
    <div
      className={`${
        status === "failure"
          ? "bg-red-200 text-red-700"
          : status === "success"
          ? "bg-green-200 text-green-700"
          : ""
      } w-full py-2 px-3 rounded-lg`}
    >
      {children}
    </div>
  );
};

export default Alert;

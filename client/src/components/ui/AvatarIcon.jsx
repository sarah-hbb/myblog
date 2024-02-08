import React from "react";
import { IoPersonCircle } from "react-icons/io5";

const AvatarIcon = ({ size }) => {
  return (
    <IoPersonCircle
      className={`${
        size === "sm"
          ? "text-2xl"
          : size === "md"
          ? "text-4xl"
          : size === "lg"
          ? "text-5xl"
          : ""
      }`}
    />
  );
};

export default AvatarIcon;

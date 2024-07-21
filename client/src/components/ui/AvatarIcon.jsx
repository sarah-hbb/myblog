import React from "react";

const AvatarIcon = ({ avatarPicture, size }) => {
  return (
    <img
      alt=""
      size={size}
      src={avatarPicture}
      className={`
        ${
          size === "small"
            ? "w-10 h-10 border-2 border-cyan-100"
            : size === "large"
            ? "w-20 h-20 border-4 border-cyan-800"
            : "w-7 h-7"
        }
        rounded-full object-cover object-top`}
    />
  );
};

export default AvatarIcon;

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
            ? "w-10 h-10"
            : size === "large"
            ? "w-20 h-20"
            : "w-7 h-7"
        }
        "  rounded-full object-contain border-2 border-cyan-100"`}
    />
  );
};

export default AvatarIcon;

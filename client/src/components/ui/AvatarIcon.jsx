import React from "react";

const AvatarIcon = ({ avatarPicture }) => {
  return (
    <img
      alt=""
      src={avatarPicture}
      className="w-10 h-10  rounded-full object-contain border-2 border-cyan-100"
    />
  );
};

export default AvatarIcon;

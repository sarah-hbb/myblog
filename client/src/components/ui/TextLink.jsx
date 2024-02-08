import React from "react";
import { Link } from "react-router-dom";

const TextLink = ({ className, path, text }) => {
  return (
    <Link to={path} className={`${className}`}>
      {text}
    </Link>
  );
};

export default TextLink;

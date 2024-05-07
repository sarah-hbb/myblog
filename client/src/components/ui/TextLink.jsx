import React from "react";
import { Link } from "react-router-dom";

const TextLink = ({ children, className, path }) => {
  return (
    <Link to={path} className={`${className}`}>
      {children}
    </Link>
  );
};

export default TextLink;

import React from "react";
import TextLink from "../../ui/TextLink";

const NavLinks = ({ className, isInSideBar }) => {
  return (
    <div
      className={`transition-all ease-in-out ${className} ${
        isInSideBar
          ? " px-4 text-xl [&>*]:py-2 [&>*:hover]:text-cyan-800 [&>*:active]:bg-cyan-300 [&>*]:border-b-2 [&>*]:border-cyan-600"
          : ""
      }`}
    >
      <TextLink path="/" text="Home" />
      <TextLink path="/about" text="About" />
      <TextLink path="/projects" text="Projects" />
    </div>
  );
};

export default NavLinks;

import React from "react";
import TextLink from "../../ui/TextLink";
import { useSelector } from "react-redux";

const NavLinks = ({ className, isInSideBar }) => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div
      className={`transition-all ease-in-out ${className} ${
        isInSideBar
          ? " px-4 text-xl [&>*]:py-2 [&>*:hover]:text-cyan-800 [&>*:hover]:font-semibold [&>*:active]:bg-cyan-300 [&>*]:border-b-2 [&>*]:border-cyan-600"
          : "[&>*:hover]:hover:scale-105 [&>*:hover]:font-semibold"
      }`}
    >
      <TextLink path="/">Home</TextLink>
      {currentUser && currentUser.isAdmin ? (
        <TextLink path="/dashboard?tab=notifications"> Notifications </TextLink>
      ) : (
        <TextLink path="/about"> About </TextLink>
      )}

      {currentUser && currentUser.isAdmin && (
        <TextLink path="/create-post">Create Post</TextLink>
      )}
      {currentUser && !currentUser.isAdmin && (
        <TextLink path="/dashboard?tab=bookmarks">Bookmarks</TextLink>
      )}
    </div>
  );
};

export default NavLinks;

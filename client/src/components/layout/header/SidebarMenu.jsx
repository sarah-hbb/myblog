import React from "react";
import NavLinks from "./NavLinks";

const SidebarMenu = ({ isMenuOpen }) => {
  return (
    <div
      className={`fixed sm:hidden flex right-0 top-16 bg-gradient-to-b bg-cyan-200 
      w-1/2 min-h-screen bg-opacity-90 transition-all shadow-cyan-900 shadow-2xl
       ${
         isMenuOpen ? "w-1/2 opacity-90" : "w-0 opacity-0 pointer-events-none"
       }`}
    >
      <NavLinks
        isInSideBar={true}
        className="flex flex-col w-full pt-5 text-cyan-600"
      />
    </div>
  );
};

export default SidebarMenu;

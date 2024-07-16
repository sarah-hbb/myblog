import React, { useEffect, useRef, useState } from "react";
import SidebarMenu from "./SidebarMenu";
// hamburger height = h-1 + gap-1.5 + h-1 + gap-1.5 + h-1 = 6
// diagonal =  6* root of 2
// translate y --> bar height/2 = 1/2

const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen((prv) => !prv);
  };

  // close sidebar menu when clicking outside of the sidebar
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [menuRef]);

  return (
    <div className="flex-col" ref={menuRef}>
      <div className="sm:hidden w-8" onClick={toggleMenu}>
        <div
          className={`flex flex-col gap-1.5 origin-left
        before:w-8 before:h-1 before:bg-cyan-100 before:rounded-sm before:origin-left before:translate-x-0 before:-translate-y-1/2 before:transition-all
        after:w-8 after:h-1 after:bg-cyan-100 after:rounded-sm after:origin-left after:translate-x-0 after:translate-y-1/2 after:transition-all
        ${
          isMenuOpen
            ? "before:rotate-45 before:w-burger-diag after:-rotate-45 after:w-burger-diag"
            : ""
        }
        `}
        >
          <button
            type="text"
            className={`w-8 h-1 bg-cyan-100 rounded-sm transition-all
          ${isMenuOpen ? "opacity-0 w-0" : " opacity-100"}`}
          ></button>
        </div>
      </div>
      <SidebarMenu isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default BurgerMenu;

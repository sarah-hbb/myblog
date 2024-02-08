import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import BurgerMenu from "./BurgerMenu";
import AvatarIcon from "../../ui/AvatarIcon";
import NavLinks from "./NavLinks";
import SigninButton from "./SigninButton";

const Header = () => {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <div className="lg:py-4 lg:px-5% px-3 py-3  bg-cyan-900 text-cyan-100 flex justify-between items-center gap-4 fixed w-full">
      <Link to="/" className="flex sm:gap-4 gap-2 items-center">
        <img
          src={logo}
          alt=""
          className="rounded-full lg:block hidden lg:visible lg:w-20 lg:h-20 w-16 h-16"
        />
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-cyan-50 to-cyan-400 text-nowrap hover:scale-105 transition-all ease-in-out">
          Sarah's Blog
        </h1>
      </Link>
      <Searchbar />
      <NavLinks className="gap-4 lg:gap-10 sm:flex hidden items-center" />
      <div className="flex sm:flex-row-reverse items-center transition-all gap-4">
        {signedIn ? <AvatarIcon /> : <SigninButton />}
        <BurgerMenu />
      </div>
    </div>
  );
};

export default Header;

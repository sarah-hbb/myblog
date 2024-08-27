import React from "react";
import Header from "./header/Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between">
      <Header />
      <div className="flex flex-col flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

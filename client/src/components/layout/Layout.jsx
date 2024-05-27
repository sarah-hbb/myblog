import React, { Children } from "react";
import Header from "./header/Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";

const Layout = () => {
  return (
    <div className="font-inter font-extralight">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;

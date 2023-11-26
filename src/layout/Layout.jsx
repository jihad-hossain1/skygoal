import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";

const Layout = () => {
  return (
    <div className="bg-zinc-50">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;

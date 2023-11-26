import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <div className="bg-zinc-50">
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

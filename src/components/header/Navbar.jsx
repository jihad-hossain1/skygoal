import React from "react";
import { NavLink } from "react-router-dom";
import { navdata } from "./navData";

const Navbar = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <nav className="flex justify-between items-center p-2">
        {/* logo section  */}
        <div></div>
        {/* main navbar section  */}
        <ul className="flex gap-5 items-center">
          {navdata.map(({ label, path }) => (
            <li className="" key={path}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "text-maincolor" : "")}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* second navbar section  */}
        <ul className="flex gap-5 items-center">
          <li className="">
            <NavLink
              to={"/offers"}
              className={({ isActive }) => (isActive ? "text-maincolor" : "")}
            >
              Offers
            </NavLink>
          </li>
          <li className="cbtn">
            <NavLink
              to={"/courses"}
              className={({ isActive }) => (isActive ? "text-zinc-900" : "")}
            >
              Courses
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

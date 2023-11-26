import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navdata } from "./navData";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="max-w-screen-2xl mx-auto">
      <nav className="flex justify-between items-center p-2">
        {/* logo section  */}
        <div className="hidden md:block"></div>
        {/* main navbar section  */}
        <ul className="hidden md:flex gap-5 items-center ">
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

        {/* mobile navbar section  */}
        <div className="md:hidden relative">
          <button
            className={toggle == true ? "hidden" : false}
            onClick={() => setToggle(!toggle)}
          >
            <FiMenu className="" size={25} />
          </button>

          {toggle && (
            <div className="">
              <div className="absolute z-10 top-0 ">
                <div className=" bg-zinc-200 h-[500px] rounded-lg">
                  <div className="rounded bg-zinc-100/70 shadow-sm w-fit p-1">
                    <button
                      onClick={() => setToggle(!toggle)}
                      className={toggle == false ? "hidden" : true}
                    >
                      <MdClose size={25} />
                    </button>
                  </div>
                  <ul className="flex flex-col gap-4 p-10 -mt-4 ">
                    {navdata.map(({ path, label }, index) => (
                      <li
                        className="transition-all duration-300"
                        onClick={() => setToggle(!toggle)}
                        key={index}
                      >
                        <NavLink
                          to={path}
                          className={({ isActive }) =>
                            isActive ? "text-maincolor" : ""
                          }
                        >
                          {label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
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

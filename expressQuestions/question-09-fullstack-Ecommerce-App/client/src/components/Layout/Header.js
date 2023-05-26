import React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <div className="w-full sticky top-0 z-50">
      <nav
        className={`max-w-7xl mx-auto  py-6 flex justify-between  items-center  gap-4 transition-all ease-in duration-500 ${
          extendNavbar ? "pb-44" : "pb-6"
        }`}
      >
        <img
          className="w-[250px] mx-auto lg:ml-[-30px]"
          src="/images/logo.png"
          alt="logo"
        />

        <div
          className={`lg:static  w-full lg:w-auto min-h-[20vh]  lg:min-h-fit absolute  left-0  transition-all ease-in duration-500  ${
            extendNavbar ? "top-20" : "top-[-135%]"
          } `}
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 ml-8">
            <NavLink
              to="/"
              className="cursor-pointer font-poppins text-gray-500 hover:text-gray-700 active:text-green-500  duration-300  "
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="cursor-pointer font-poppins  text-gray-500 hover:text-gray-700 active:text-green-500  duration-300  "
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="cursor-pointer font-poppins  text-gray-500 hover:text-gray-700 active:text-green-500  duration-300  "
            >
              Contact
            </NavLink>
            <NavLink
              to="/login"
              className="cursor-pointer font-poppins  text-gray-500 hover:text-gray-700 active:text-green-500  duration-300  "
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="cursor-pointer font-poppins  text-gray-500 hover:text-gray-700 active:text-green-500  duration-300  "
            >
              SignUp
            </NavLink>
            <div className="flex items-center">
              <NavLink
                to="/cart"
                className="px-6 cursor-pointer relative text-lg"
              >
                🛒 <span className="absolute">0</span>
              </NavLink>
              <NavLink
                onClick={() => {
                  setExtendNavbar((open) => !open);
                }}
                className="text-3xl cursor-pointer lg:hidden mr-2"
              >
                {extendNavbar ? <CloseIcon /> : <MenuIcon />}
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

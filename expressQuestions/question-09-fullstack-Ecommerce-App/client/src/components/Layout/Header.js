import React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { toast } from "react-hot-toast";

import "react-dropdown/style.css";

const Header = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [auth, setAuth] = useAuth();
  const [dropdown, setDropDown] = useState(false);
  console.log(dropdown);

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logged out successfull");
  };
  return (
    <div className="w-full sticky top-0 z-50">
      <nav
        className={`max-w-7xl mx-auto  py-6 flex justify-between z-50  items-center  gap-4 transition-all ease-in duration-500 ${
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
            {!auth.user ? (
              <div>
                <NavLink
                  to="/login"
                  className="cursor-pointer font-poppins  text-gray-500 hover:text-gray-700 active:text-green-500  duration-300 mr-4 "
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className="border border-violet-500 hover:bg-violet-200 py-1 px-6 my-6 font-poppins  rounded-sm cursor-pointer   text-gray-500 hover:text-gray-700 active:text-green-500  duration-300  "
                >
                  SignUp
                </NavLink>
              </div>
            ) : (
              <div className="relative text-gray-600">
                <span onClick={() => setDropDown(!dropdown)}>
                  {auth?.user?.name}
                  <ArrowDropDownIcon />
                </span>
                {dropdown && (
                  <div>
                    <ul className="absolute top-10 left-0">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className=" font-poppins  cursor-pointer  text-gray-500 hover:text-gray-700 active:text-green-500  duration-300  "
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/signup"
                          className=" font-poppins  cursor-pointer  text-gray-500 hover:text-gray-700 active:text-green-500  duration-300  "
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}

            <div className="flex items-center">
              <NavLink
                to="/cart"
                className="px-6 cursor-pointer relative text-lg text-gray-500 hover:text-violet-400"
              >
                <ShoppingCartIcon />{" "}
                <span className="absolute hover:text-violet-400">0</span>
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

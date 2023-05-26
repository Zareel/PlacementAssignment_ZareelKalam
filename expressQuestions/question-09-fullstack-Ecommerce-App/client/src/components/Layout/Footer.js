import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-lightGray py-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4">
        <img className="w-[250px] mx-auto" src="/images/logo.png" alt="logo" />
        <div className="flex gap-6 font-poppins font-semibold">
          <Link
            to="/about"
            className="cursor-pointer font-poppins  text-gray-500 hover:text-gray-700 active:text-green-500  duration-300  "
          >
            About
          </Link>
          <Link
            to="/contact"
            className="cursor-pointer font-poppins  text-gray-500 hover:text-gray-700 active:text-green-500  duration-300  "
          >
            Contact
          </Link>
          <Link
            to="/policy"
            className="cursor-pointer font-poppins  text-gray-500 hover:text-gray-700 active:text-green-500  duration-300  "
          >
            Policy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

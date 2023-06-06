import React, { useContext } from "react";
import { themeContext } from "../context/ContextApi";

const Theme = () => {
  const { theme, handleOnClick } = useContext(themeContext);
  return (
    <div>
      <h1>My theme is {theme}</h1>
      <button
        onClick={handleOnClick}
        className={`${
          theme === "dark"
            ? "bg-white text-black px-6 py-1 rounded-md"
            : "bg-black text-white px-6 py-1 rounded-md"
        }`}
      >
        {theme === "dark" ? "light" : "dark"}
      </button>
    </div>
  );
};

export default Theme;

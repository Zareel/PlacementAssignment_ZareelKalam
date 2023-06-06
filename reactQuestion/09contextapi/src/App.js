import React, { useState } from "react";
import Theme from "./components/Theme";
import { themeContext, themes } from "./context/ContextApi";

function App() {
  const [theme, setTheme] = useState(themes.light);

  const handleOnClick = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  };

  return (
    <div
      className={`w-full h-[100vh] ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <themeContext.Provider value={{ theme, handleOnClick }}>
        <h1 className="text-blue-500 text-3xl font-bold ">Dark Light Theme</h1>
        <Theme theme={theme} />
      </themeContext.Provider>
    </div>
  );
}

export default App;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        roboto: "Roboto",
        poppins: "Poppins",
      },
      colors: {
        blue: "#6c6cf5",
        ligntBlule: " #c4c4f3",
        yellow: "# #cdd82b",
        white: "#ffffff",
        lightGray: "#e8ece0",
        offWhite: "#f0f2f2",
      },
      boxShadow: {
        shadow: "0 8px 6px -6px #888",
      },
    },
  },
  plugins: [],
};

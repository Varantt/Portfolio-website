/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screen: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        sans: [
          "Inter var, sans-serif",
          { fontFeatureSettings: '"cv11", "ss01"' },
        ],
      },
      colors: {
        blackRaisin: "#2D232E",
        darkViolet: "#9a32a2",
        lightWhite: "#E0DDCF",
        liver: "#534B52",
        offWhite: "#F1F0EA",
        lightBlack: "hsla(0, 0%, 0%, 0.66)",
      },
    },
  },
  plugins: [],
};

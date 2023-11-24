/** @type {import('tailwindcss').Config} */
const matcha = {
  neutral: "#7A7A7A",
  "base-100": "#FBF9F8",
  primary: "#D2D7C6",
  secondary: "#4F5E50",
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...matcha,
    },
    fontSize: {
      sm: "0.750rem",
      base: "1rem",
      xl: "1.333rem",
      "2xl": "1.777rem",
      "3xl": "2.369rem",
      "4xl": "3.158rem",
      "5xl": "4.210rem",
    },
    fontFamily: {
      playfair: "Playfair Display",
      quicksand: "Quicksand",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
  },
  daisyui: {
    themes: [
      {
        matcha,
      },
    ],
  },
  plugins: [require("daisyui")],
};

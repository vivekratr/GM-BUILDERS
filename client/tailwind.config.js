/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "inria-serif": "'Inria Serif'",
      },
    },
    fontSize: {
      inherit: "inherit",
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#3D00B7",
      },
      // fontFamily: {
      //   ibm: ["IBM Plex Sans", "sans-serif"],
      //   jakarta: ["Plus Jakarta Sans", "sans-serif"],
      // },
    },
  },
  plugins: [],
};

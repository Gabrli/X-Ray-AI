/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "custom-h-top-header": "50px",
        "custom-h-logo": "50px",
        "custom-h-fileloader": "400px",
      },
      width: {
        "custom-w-logo": "60px",
        "custom-fileloader-w": "600px",
      },
      screens: {
        mobile1: { max: "1200px" },
        mobile2: { max: "420px" },
      },
      colors: {
        primary: "#1F5D7A",
        secondary: "#153160",
      },
    },
  },
  plugins: [],
};


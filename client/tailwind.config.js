/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "custom-h-top-header": "50px",
        "custom-h-logo": "50px",
        "custom-h-hero": "750px",
        "custom-mobile-h-hero": "400px",
        "custom-mobile2-h-hero": "300px",
        "custom-h-fileloader": "400px",
      },
      width: {
        "custom-w-logo": "60px",
        "custom-w-hero": "750px",
        "custom-mobile-w-hero": "400px",
        "custom-mobile2-w-hero": "300px",
        "custom-fileloader-w": "600px",
      },
      screens: {
        mobile1: { max: "745px" },
        mobile2: { max: "396px" },
      },
      colors: {
        primary: "#1F5D7A",
        secondary: "#153160",
      },
    },
  },
  plugins: [],
};


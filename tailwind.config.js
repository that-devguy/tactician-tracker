/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#101115",
          bg2: "#222327",
          bg3: "#323338",
          main: "#ff571d",
          secondary: "#c0ff32",
          accent: "#3e1f7d"
        }
      },
    },
  },
  plugins: [],
};

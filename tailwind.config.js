/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        public_sans: ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

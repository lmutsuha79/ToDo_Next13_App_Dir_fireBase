/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/tailwind-datepicker-react/dist/**/*.js", 

    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-gray": "#9ca3af",
      },
    },
  },
  plugins: [],
};

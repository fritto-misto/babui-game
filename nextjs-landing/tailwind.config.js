/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Aggiungi altre cartelle se necessario
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

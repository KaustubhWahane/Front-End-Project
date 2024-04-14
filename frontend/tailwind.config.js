/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
      oswald: ['Oswald', 'sans-serif'],
      pacifico: ['Pacifico', 'cursive'],
    },
    colors: {
      richChocolate: '#5D4037',
      creamyVanilla: '#FFF9C4',
    },
  }
  },
  plugins: [],
}
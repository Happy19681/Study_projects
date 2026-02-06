//Configure tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily:{
        lemon:['Lemon','cursive'],
         itim:['Itim','cursive'],
        },
    },
  },
  plugins: [],
}


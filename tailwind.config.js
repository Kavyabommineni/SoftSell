
/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  darkMode: 'class', // Enables dark mode using the class strategy
  theme: {
    extend: {
      colors: {
        'dark-bg': '#121212',
        'dark-text': '#e0e0e0',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  }, 
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // or any custom font
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

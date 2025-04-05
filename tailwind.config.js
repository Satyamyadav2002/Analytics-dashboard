/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dashboard': {
          dark: '#1a1a1a',
          card: '#242424',
          text: '#e0e0e0',
        },
      },
    },
  },
  plugins: [],
} 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backdrop: '#121212',
        primaryButtonColor: '#1db954',
        activeColor: '#282828',
        link: '#b3b3b3',
        footer: '#181818'
      }
    },
  },
  plugins: [],
}
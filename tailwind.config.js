/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'currency': "url('https://img.freepik.com/free-vector/indian-rupee-coins-background-with-text-space_1017-17452.jpg?w=740&t=st=1717302727~exp=1717303327~hmac=6170324360bc3bbf35af8308b014e797db7c72fb7b88757ceadf24c738e2fa4d')",
      }
    },
  },
  plugins: [],
}
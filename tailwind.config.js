/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'beach' : 'url(../images/sunset-beach.jpg)'
      },
  },
  },
  plugins: [],
}


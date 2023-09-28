/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['CustomFont', 'sans'],
        'script': ['Comic Sans MS', 'cursive'],
      },
    },
  },
  plugins: [],
}


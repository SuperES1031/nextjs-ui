/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      noto: ['Noto Sans'],
    },
    extend: {
      fontFamily: {
        sans: ['Noto Sans'],
        dm: ['DM Sans']
      },
      fontSize: {
        'body': ['20px', '26px'],
        'head': ['64px', '68px'],
        'subhead': ['32px', '36px']
      },
      colors: {
        headColor: '#EA2667'
      },
      borderRadius: {
        'default': '10px'
      }
    },
  },
  plugins: [],
}

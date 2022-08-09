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
        'head': ['55px', '55px'],
        'title': ['44px', '46px'],
        'subhead': ['22px', '24px'],
        'body': ['18px', '20px']
      },
      colors: {
        headColor: '#EA2667'
      },
      borderRadius: {
        'default': '10px'
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './screens/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      appred: '#C83D3D',
      appblue: '#4994C2',
      appgray: '#EDEDED',
      applightgray: '#F4F4F4',
      appwhite: '#FFFFFF',
      applightblue: '#E4EEF5'
    }
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx}', './src/screens/*.{js,jsx}'],
  theme: {
    extend: {
    },
    colors: {
      appred: '#C83D3D',
      appblue: '#4994C2',
      appbluelight: '#7488C0',
      appgray: '#E0E0E0',
      applightgray: '#F4F4F4',
      appgreen: '#72B040',
      appwhite: '#FEFFFF',
      appblack: '#212121'
    }
  },
  plugins: []
}

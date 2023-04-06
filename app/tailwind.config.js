/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx}', './src/screens/*.{js,jsx}', './src/components/*.jsx', './src/components/**/*.jsx'],
  theme: {
    extend: {
    },
    colors: {
      appred: '#C83D3D',
      appblue: '#4994C2',
      appbluelight: '#E4EEF5',
      appgray: '#E0E0E0',
      applightgray: '#F4F4F4',
      appdarkgrey: '#C9D7E1',
      appgreen: '#72B040',
      appwhite: '#FEFFFF',
      appblack: '#212121'
    }

  },
  plugins: []
}

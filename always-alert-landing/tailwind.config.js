/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
      // screens: {
      //   '2xl': { min: '1535px' },
      //   // => @media (max-width: 1535px) { ... }

      //   xl: { min: '1279px' },
      //   // => @media (max-width: 1279px) { ... }

      //   lg: { min: '1023px' },
      //   // => @media (max-width: 1023px) { ... }

      //   md: { min: '767px' },
      //   // => @media (max-width: 767px) { ... }

      //   sm: { min: '639px' },
      //   // => @media (max-width: 639px) { ... }

      //   xs: { min: '479px' }
      //   // => @media (max-width: 479px) { ... }
      // }
    }
  },
  plugins: []
}

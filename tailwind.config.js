/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, rgba(7, 47, 87, 0.75), rgba(7, 47, 87, 0), rgba(7, 47, 87, 0.45))',
      },
      screens: {
        '2xl' : '1400px',   
        // @media (min-width: 1400px)

        'xl' : {'max': '1399px'},
        // @media (max-width: 1399px)
        
        'lg' : {'max': '1199px'},
        // @media (max-width: 1199px)

        'md' : {'max': '991px'},
        // @media (max-width: 991px)

        'sm' : {'max': '768px'},
        // @media (max-width: 768px)

        'sm-670' : {'max': '670px'},
        // @media (max-width: 670px)

        'xs' : {'max': '575px'},
        // @media (max-width: 575px)

        'ss' : {'max': '500px'},
        // @media (max-width: 500px)

        's' : { 'max' : '420px' },

        's-[380]' : { 'max': '380px' },

        's-[350px]' : { 'max': '350px' },
      }
    },
  },
  plugins: [],
}


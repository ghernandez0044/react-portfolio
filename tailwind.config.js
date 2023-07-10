/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'space-blue': '#111d4a',
        'pale-purple': '#a06b9a',
        'firengine-red': '#c42021',
        'rich-black': '#0d1b2a',
        'tiffany-blue': '#75dddd',
        'lightgray': '#d3d3d3',
        'transparent': 'transparent',
        'dark-color': '#484848',
        'light-color': '#767676',
      },
      backgroundImage: (theme) => ({
        'gradient-rainbow':
        'linear-gradient(to left top, #75dddd, #59b5c0, #438d9f, #32687d, #224559, #233e55, #25374f, #273049, #403f60, #5d4e76, #7d5d89, #a06b9a)',
        'gradient-rainred':
        'linear-gradient(to right bottom, #0d1b2a, #1f2446, #462659, #751d5d, #a0044e, #a3024b, #a60148, #a90045, #8a0855, #64185b, #3c1e58, #111d4a)'
      }),
      fontFamily: {
        heading: ['Anton', 'sans-serif'],
        subheading: ['Asap', 'sans-serif'],
        content: ['Hind Vadodara', 'sans-serif']
      },
      content: {
        // add -> brush: "url('./assets/brush.png')"
        // add -> person1: "url('./assets/person1.png')"
        // add -> person2: "url('./assets/person2.png')"
        // add -> person3: "url('./assets/person3.png')"
      },
      screens: {
        xs: '480px',
        sm: '768px',
        md: '1060px'
      }
    },
  },
  plugins: [],
}


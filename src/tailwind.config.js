module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      colors: {
        main: {
          yellow: '#F0D041',
          red: '#FA9E00',
          DEFAULT: '#FF680D',
        },
        darkbrown: {
          DEFAULT: '#240400',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

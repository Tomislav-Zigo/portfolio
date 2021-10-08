module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        '90vh': "90vh",
        '95vh': "95vh",
        '100vw': "100vw"
      },
      colors: {
        teal: '#30CFCC'
      },
      transform: ['hover', 'focus','group-hover'],
      transitionProperty: 
      {
        'height': 'height',
        'width' : 'width',
        'spacing': 'margin, padding'
      }
    
    },
  },
  variants: {
    extend: {
      transitionProperty: ['hover', 'focus','group-hover'],
      width: ["responsive", "hover", "focus",'group-hover']
    }
  },
  plugins: [],
}

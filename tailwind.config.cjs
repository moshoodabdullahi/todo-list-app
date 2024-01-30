const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Josefin Sans"', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      blue: {
        0: 'hsl(0, 0%, 98%)',
        100: 'hsl(236, 33%, 92%)',
        200: 'hsl(233, 11%, 84%)',
        300: 'hsl(236, 9%, 61%)',
        400: 'hsl(235, 19%, 35%)',
        500: 'hsl(234, 11%, 52%)',
        600: 'hsl(220, 98%, 61%)',
        700: 'hsl(192, 100%, 67%)',
        800: 'hsl(280, 87%, 65%)',
      },
    },
    backgroundImage: {
      'mobile-light': "url('../../images/bg-mobile-light.jpg')",
      'icon-checked': "url('../../images/icon-check.svg')",
    },
  },
  plugins: [],
};

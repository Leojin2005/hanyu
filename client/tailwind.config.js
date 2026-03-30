export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#58CC02',    // Duolingo green
        'primary-dark': '#46A302',
        secondary: '#1CB0F6',  // Duolingo blue
        accent: '#FF9600',     // Duolingo orange
        danger: '#FF4B4B',
        'dark-bg': '#131F24',
        'dark-card': '#1A2C32',
      },
      fontFamily: {
        sans: ['"Nunito"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
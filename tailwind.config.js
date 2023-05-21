/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'fabula-header-green': '#2A4A41',
        'fabula-segment-green': '#79A49A',
      },
    },
    fontFamily: {
      'fabula-header': ['PT Sans Narrow'] ,
      'fabula': ['Antonio'],
    }
  },
  plugins: [],
}


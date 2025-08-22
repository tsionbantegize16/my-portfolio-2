// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS, JSX, TS, TSX files in the src directory
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Custom color palette based on the provided design
        primary: {
          50: '#FEFFFF',   // Pure white
          100: '#DEF2F1',  // Light mint
          200: '#3AAFA9',  // Bright teal
          300: '#2B7A78',  // Deep teal
          400: '#17252A',  // Dark blue-gray
          500: '#3AAFA9',  // Main teal
          600: '#2B7A78',  // Darker teal
          700: '#17252A',  // Darkest
          800: '#17252A',  // Darkest
          900: '#17252A',  // Darkest
        },
        // Custom color variants
        teal: {
          50: '#FEFFFF',
          100: '#DEF2F1',
          200: '#3AAFA9',
          300: '#2B7A78',
          400: '#17252A',
          500: '#3AAFA9',
          600: '#2B7A78',
          700: '#17252A',
          800: '#17252A',
          900: '#17252A',
        },
        // Background colors
        background: {
          light: '#FEFFFF',
          dark: '#17252A',
        },
        // Text colors
        text: {
          light: '#17252A',
          dark: '#FEFFFF',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};
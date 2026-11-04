/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EFF7F3',
          100: '#D7EDE2',
          200: '#AFDBC4',
          300: '#7CC2A0',
          400: '#4DA37E',
          500: '#2E8464',
          600: '#1F6B52',
          700: '#185540',
          800: '#123F30',
          900: '#0C3324',
          950: '#08241A',
        },
        sand: {
          50: '#FBF7F0',
          100: '#F4EDE1',
          200: '#E8D7BE',
          300: '#D9C2A0',
          400: '#C5A67E',
          500: '#A8865D',
          600: '#86693F',
          700: '#6B5230',
          800: '#4F3C24',
          900: '#37291A',
        },
      },
      fontFamily: {
        sans: ['Archivo', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Archivo', 'ui-sans-serif', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'word-in': {
          from: { opacity: '0', transform: 'translateY(60%) rotateX(-40deg)' },
          to: { opacity: '1', transform: 'translateY(0) rotateX(0)' },
        },
        'grow-bar': {
          from: { transform: 'scaleY(0)' },
          to: { transform: 'scaleY(1)' },
        },
        'line-draw': {
          from: { strokeDashoffset: '1000' },
          to: { strokeDashoffset: '0' },
        },
        shimmer: {
          from: { backgroundPosition: '-200% 0' },
          to: { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'word-in': 'word-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'grow-bar': 'grow-bar 1s cubic-bezier(0.22, 1, 0.36, 1) both',
        'line-draw': 'line-draw 2s ease-out both',
        shimmer: 'shimmer 3.5s linear infinite',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};

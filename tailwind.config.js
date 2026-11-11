/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EFF9FA',
          100: '#DCF0F4',
          200: '#BBE1E7',
          300: '#85CAD6',
          400: '#3DAEC2',
          500: '#278191',
          600: '#1B6674',
          700: '#165560',
          800: '#11464F',
          900: '#0E3B43',
          950: '#08262B',
        },
        sand: {
          50: '#FBF7F0',
          100: '#F4EDE1',
          200: '#E9D8C0',
          300: '#D9C2A0',
          400: '#C5A67E',
          500: '#A8865D',
          600: '#86693F',
          700: '#6B5230',
          800: '#4F3C24',
          900: '#37291A',
        },
        ember: {
          300: '#E59A79',
          400: '#D97A54',
          500: '#C1552E',
          600: '#9E4324',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Jost', 'ui-sans-serif', 'system-ui', 'sans-serif'],
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
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'word-in': 'word-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};

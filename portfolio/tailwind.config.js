/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        secondary: {
          50: '#fef7ed',
          100: '#fdedd3',
          200: '#fbd9a5',
          300: '#f8c06c',
          400: '#f59e0b',
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
          800: '#78350f',
          900: '#451a03',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-elegant": "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #0f0f0f 100%)",
        "gradient-warm": "linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)",
        "gradient-glass": "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'background-shift': 'backgroundShift 25s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'elegant-pulse': 'elegantPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(251, 191, 36, 0.1)' },
          'to': { boxShadow: '0 0 30px rgba(251, 191, 36, 0.2), 0 0 40px rgba(251, 191, 36, 0.1)' },
        },
        backgroundShift: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(-15px) translateY(-8px)' },
          '50%': { transform: 'translateX(15px) translateY(8px)' },
          '75%': { transform: 'translateX(-8px) translateY(15px)' },
        },
        slideUp: {
          'from': { transform: 'translateY(100%)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          'from': { transform: 'translateY(-100%)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          'from': { opacity: '0', transform: 'scale(0.9)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        elegantPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(251, 191, 36, 0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(251, 191, 36, 0.2), 0 0 40px rgba(251, 191, 36, 0.1)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'elegant': '0 0 20px rgba(251, 191, 36, 0.1)',
        'elegant-lg': '0 0 30px rgba(251, 191, 36, 0.2)',
        'warm-gold': '0 0 20px rgba(251, 191, 36, 0.15)',
        'warm-copper': '0 0 20px rgba(245, 158, 11, 0.15)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'glass-lg': '0 8px 32px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
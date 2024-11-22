const plugin = require('tailwindcss/plugin');
const { blackA, mauve, violet, indigo, purple } = require('@radix-ui/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...blackA,
        ...mauve,
        ...violet,
        ...purple,
        ...indigo,

        accent: 'var(--red-9)',
        'accent-foreground': 'var(--red-contrast)',
        background: 'var(--red-1)',
        foreground: 'var(--red-12)',
        card: 'var(--red-2)',
        'card-foreground': 'var(--red-11)',
        popover: 'var(--red-3)',
        'popover-foreground': 'var(--red-10)',
        border: 'var(--red-6)',
        input: 'var(--red-6)',
        primary: 'var(--red-12)',
        'primary-foreground': 'var(--red-1)',
        secondary: 'var(--red-3)',
        'secondary-foreground': 'var(--red-11)',
        muted: 'var(--red-3)',
        'muted-foreground': 'var(--red-11)',
      },
      keyframes: {
        enterFromRight: {
          from: { opacity: '0', transform: 'translateX(200px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        enterFromLeft: {
          from: { opacity: '0', transform: 'translateX(-200px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        exitToRight: {
          from: { opacity: '1', transform: 'translateX(0)' },
          to: { opacity: '0', transform: 'translateX(200px)' },
        },
        exitToLeft: {
          from: { opacity: '1', transform: 'translateX(0)' },
          to: { opacity: '0', transform: 'translateX(-200px)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'rotateX(-10deg) scale(0.9)' },
          to: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
        },
        scaleOut: {
          from: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
          to: { opacity: '0', transform: 'rotateX(-10deg) scale(0.95)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(6)',
            opacity: '0',
          },
        },
        'share-icon': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        'share-ring': {
          '0%': { transform: 'scale(0.8)', opacity: 0.8 },
          '100%': { transform: 'scale(2)', opacity: 0 },
        },
        'lock-icon-1': {
          '0%, 100%': { opacity: 1 },
          '33%, 66%': { opacity: 0 },
        },
        'lock-icon-2': {
          '0%, 100%': { opacity: 0 },
          '33%': { opacity: 1 },
          '66%': { opacity: 0 },
        },
        'lock-icon-3': {
          '0%, 33%': { opacity: 0 },
          '66%, 100%': { opacity: 1 },
        },
        'lock-icon-transition': {
          '0%, 100%': {
            opacity: 1,
          },
          '33%': {
            opacity: 0,
          },
          '66%': {
            opacity: 0,
          },
        },
      },
      animation: {
        scaleIn: 'scaleIn 200ms ease',
        scaleOut: 'scaleOut 200ms ease',
        fadeIn: 'fadeIn 200ms ease',
        fadeOut: 'fadeOut 200ms ease',
        enterFromLeft: 'enterFromLeft 250ms ease',
        enterFromRight: 'enterFromRight 250ms ease',
        exitToLeft: 'exitToLeft 250ms ease',
        exitToRight: 'exitToRight 250ms ease',
        ping: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'share-icon': 'share-icon 2s ease-in-out infinite',
        'share-ring': 'share-ring 2s ease-out infinite',
        'lock-icon-1': 'lock-icon-transition 3s ease-in-out infinite',
        'lock-icon-2': 'lock-icon-transition 3s ease-in-out infinite 1s',
        'lock-icon-3': 'lock-icon-transition 3s ease-in-out infinite 2s',
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities }) => {
      matchUtilities({
        perspective: (value) => ({
          perspective: value,
        }),
      });
    }),
  ],
};

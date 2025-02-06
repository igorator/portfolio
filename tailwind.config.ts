import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },

      animation: {
        grain: 'grain-animation 8s steps(10) infinite',
      },
      keyframes: {
        'grain-animation': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, -20%)' },
          '30%': { transform: 'translate(-5%, -10%)' },
          '40%': { transform: 'translate(-15%, -20%)' },
          '50%': { transform: 'translate(-5%, -10%)' },
          '60%': { transform: 'translate(-15%, -20%)' },
          '70%': { transform: 'translate(-5%, -10%)' },
          '80%': { transform: 'translate(-15%, -20%)' },
          '90%': { transform: 'translate(-5%, -10%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

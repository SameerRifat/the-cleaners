/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'w-220': '220px',
        'xxxs': '300px',
        'w-350': '350px',
        'xxs': '450px',
        'xs': '580px',
        'xxl': '1700px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'theme-yellow-400': '#ffb01a',
        'theme-yellow-500': '#FFA700',
        'theme-yellow-600': '#e69600',

        'theme-blue': '#036DB3',
      }
    },
  },
  plugins: [],
}

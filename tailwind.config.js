/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': `var(--primary-color)`,
        'secondary': `var(--secondary-color)`,
        'accent': `var(--accent-color)`,
        'highlight': `var(--highlight-color)`,
        'background': `var(--background-color)`,
      },
      fontFamily: {
        'opensans': ['OpenSans'],
        'roboto': ['Roboto'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

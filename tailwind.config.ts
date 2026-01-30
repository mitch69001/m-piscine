import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3fbfd',
          100: '#e6f8fb',
          200: '#c1edf4',
          300: '#83dbea',
          400: '#44c8df',
          500: '#06b6d4',
          600: '#059bb4',
          700: '#047f94',
          800: '#036475',
          900: '#024955',
          950: '#022e35',
        },
      },
    },
  },
  plugins: [],
}

export default config

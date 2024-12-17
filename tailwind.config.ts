import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',  // If you're using the App directory (Next.js 13+)
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Blue
        secondary: '#34D399', // Green
        accent: '#FBBF24', // Yellow
        dark: '#111827', // Dark Gray
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'], // Custom font
      },
      screens: {
        'xs': '480px', // Custom screen size for mobile
        'sm': '640px', // Small devices
        'md': '768px', // Medium devices
        'lg': '1024px', // Large devices
        'xl': '1280px', // Extra large devices
      },
    },
  },
  plugins: [],
}

export default config;

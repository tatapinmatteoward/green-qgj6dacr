/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f4c27',
        accent: '#f4c448',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

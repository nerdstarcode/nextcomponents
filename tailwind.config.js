/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'default-bg': 'url(../../public/background-default.jpg)'
      },
      colors: {
        // Light theme:
        'brand-primary': "#0072bc",
        'brand-primary-filter-brightness': '#005A94',
        'brand-secondary': "#455565",
        'brand-white': "#ffffff",
        'brand-black': "#000000",
        'brand-primary-dark:': "#001973",

        'brand-info': "#0fc8f2",
        'brand-success': "#1dbd45",
        'brand-warning': "#ffbd53",
        'brand-danger': "#ef4023",

        'gray-base': "#050505",
        'gray-darkest': "#1e2022",
        'gray-middle': "#282a2b",
        'gray-darker': "#313639",
        'gray-dark': "#444c55",
        'gray-blue': "#455565",
        'gray': "#606f7d",
        'gray-light': "#b3b7c3",
        'gray-lightly': "#d2d6e1",
        'gray-lighter': "#e0e3ee",
        'gray-lightest': "#eff1F6",
        'gray-uber-light': "#f9f9fc",

        // Dark theme:
        'brand-primary-dark': "#0072bc",
        'brand-secondary-dark': "#455565",
        'brand-white-dark': "#ffffff",
        'brand-black-dark': "#000000",
        'brand-primary-dark-dark': "#001973",

        'brand-info-dark': "#0fc8f2",
        'brand-success-dark': "#1dbd45",
        'brand-warning-dark': "#ffbd53",
        'brand-danger-dark': "#ef4023",

        'gray-base-dark': "#050505",
        'gray-darkest-dark': "#1e2022",
        'gray-middle-dark': "#282a2b",
        'gray-darker-dark': "#313639",
        'gray-blue-dark': "#455565",
        'gray-darkk': "#606f7d",
        'gray-light-dark': "#86919f",
        'gray-lightly-dark': "#d2d6e1",
        'gray-lighter-dark': "#b3b7c3",
        'gray-lightest-dark': "#e0e3ee",
        'gray-uber-light-dark': "#f9f9fc",

        // Complementary colours also have variables, but are seldom used.
        'brand-complementary-1': "#753bbd",
        'brand-complementary-2': "#2cd5b6",
        'brand-complementary-3': "#d92373",

        'error-input-background': "#FFCCCC"
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

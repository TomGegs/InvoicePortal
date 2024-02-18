/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './pages/**/*.{ts,tsx}',
        './index.html',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },

    plugins: ['prettier-plugin-tailwindcss'],
};

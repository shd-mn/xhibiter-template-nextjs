/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './container/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1234px',
            },
        },

        extend: {
            fontFamily: {
                calSans: ['var(--font-cal-sans)'],
                dmSans: ['var(--font-dm-sans)'],
            },
            colors: {
                primary: '#8358fc',
                'primary-hover': '#8358FF',
                'text-heading-clr': ' #131740',
                'text-clr': ' #5A5D79',
                secondary: '#BDEFFB',

                'black-100': '#161616',
                'g-accent': '#0066D9',
                'g-gray': '#474747',
                'g-light1': '#ECF2FF',
                'g-light2': '#FBF8EE',
                'g-light3': '#FFE3EE',
                'g-shadow': '#c7ceda40',
            },
        },
    },
    plugins: [],
};

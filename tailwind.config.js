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
                'primary-hover': '#7444ff',
                'h-clr': ' #131740',
                't-clr': ' #5A5D79',
                'dark-clr': '#0D102D',

                secondary: '#BDEFFB',
            },
            animation: {
                'move-y': 'move-y 5s ease-in-out infinite',
            },
            keyframes: {
                'move-y': {
                    '0%, 100%': { transform: 'translateY(-10px)' },
                    '50%': { transform: 'translateY(10px)' },
                },
            },
        },
    },
    plugins: [],
};

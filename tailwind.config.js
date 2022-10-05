module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './containers/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            animation: {
                widthFull: 'widthFull 200ms linear forwards',
            },
            keyframes: {
                widthFull: {
                    '0%': { width: '0' },
                    '100%': { width: '100%' },
                },
            },
        },
    },
    plugins: [],
    darkMode: 'class',
}

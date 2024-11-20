/** @type {import('tailwindcss').Config} */
const baseFontSize = 10;
export default {
    content: ["./src/styles/index.css", "./src/**/*.{tsx, ts}"],
    theme: {
        container: { center: true, padding: '2rem' },
        extend: {
            spacing: () => ({
                ...Array.from({ length: 96 }, (_, index) => index * 0.5)
                    .filter((i) => i)
                    .reduce(
                        (acc, i) => ({ ...acc, [i]: `${i / (baseFontSize / 4)}rem` }),
                        {}
                    ),
            }),
            fontSize: {
                xs: [
                    `${(16 * 0.75) / baseFontSize}rem`, /* 12px */
                    {
                        lineHeight: `${(16 * 1) / baseFontSize}rem` /* 16px */,
                    },
                ],
                sm: [
                    `${(16 * 0.875) / baseFontSize}rem`, /* 14px */
                    {
                        lineHeight: `${(16 * 1.25) / baseFontSize}rem` /* 20px */,
                    },
                ],
                base: [
                    `${(16 * 1) / baseFontSize}rem`, /* 16px */
                    {
                        lineHeight: `${(16 * 1.5) / baseFontSize}rem` /* 24px */,
                    },
                ],
                lg: [
                    `${(16 * 1.125) / baseFontSize}rem`, /* 18px */
                    {
                        lineHeight: `${(16 * 1.75) / baseFontSize}rem` /* 28px */,
                    },
                ],
                xl: [
                    `${(16 * 1.25) / baseFontSize}rem`, /* 20px */
                    {
                        lineHeight: `${(16 * 1.75) / baseFontSize}rem` /* 28px */,
                    },
                ],
                "2xl": [
                    `${(16 * 1.5) / baseFontSize}rem`, /* 24px */
                    {
                        ineHeight: `${(16 * 2) / baseFontSize}rem` /* 32px */,
                    },
                ],
                "3xl": [
                    `${(16 * 1.875) / baseFontSize}rem`, /* 30px */
                    {
                        lineHeight: `${(16 * 2.25) / baseFontSize}rem` /* 36px */,
                    },
                ],
                "4xl": [
                    `${(16 * 2.25) / baseFontSize}rem`, /* 36px */
                    {
                        lineHeight: `${(16 * 2.5) / baseFontSize}rem` /* 40px */,
                    },
                ],
                "5xl": [
                    `${(16 * 3) / baseFontSize}rem`, /* 48px */
                    {
                        lineHeight: (16 * 1) / baseFontSize,
                    },
                ],
                "6xl": [
                    `${(16 * 3.75) / baseFontSize}rem`, /* 60px */
                    {
                        lineHeight: (16 * 1) / baseFontSize,
                    },
                ],
                "7xl": [
                    `${(16 * 4.5) / baseFontSize}rem`, /* 72px */
                    {
                        lineHeight: (16 * 1) / baseFontSize,
                    },
                ],
                "8xl": [
                    `${(16 * 6) / baseFontSize}rem`, /* 96px */
                    {
                        lineHeight: (16 * 1) / baseFontSize,
                    },
                ],
                "9xl": [
                    `${(16 * 8) / baseFontSize}rem`, /* 128px */
                    {
                        lineHeight: (16 * 1) / baseFontSize,
                    },
                ],
            },
            colors: {
                c1: '#3c3c3c',
                c2: '#efefef',
                c3: '#6a6a6a',
                c4: '#818181',
                c5: '#e8e8e8'
            },
            fontFamily: {
                'display': ['Ubuntu', 'sans-serif'],
                'ubuntu': ['Ubuntu'],
                'montserrat': ['Montserrat'],
                'oldStandardTT': ['"Old Standard TT"']
            },
            animation: {
                'fadeOut': 'fadeOut 1s ease-out',
                'slideIn': 'slideIn 1s linear forwards',
                'slideOut': 'slideOut 1s linear forwards',
            },
            keyframes: {
                fadeOut: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
                slideIn: { '0%': { transform: 'scaleX(1)' }, '100%': { transform: 'scaleX(0)', display: 'none' } },
                slideOut: { '0%': { transform: 'scaleX(0)', display: 'block' }, '100%': { transform: 'scaleX(1)' } },
            }
        },
    },
    plugins: [],
}

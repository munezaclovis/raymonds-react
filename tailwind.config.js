module.exports = {
    important: true,
    purge: [".src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                ubuntu: "'Ubuntu Mono', monospace",
                montserrat: "'montserrat', sans-serif",
                nunito: "'Nunito Sans', sans-serif",
            },
            colors: {
                main: {
                    text: "rgb(187 190 194)",
                    textHover: "rgb(147 103 180)",
                    background: "rgb(34 37 42)",
                    backgroundCard: "rgb(40 43 47)",
                },
            },
            zIndex: {
                1: 1,
            },
            width: (theme) => ({
                200: "200px",
                300: "300px",
                400: "400px",
                500: "500px",
                600: "600px",
            }),
            height: (theme) => ({
                200: "200px",
                300: "300px",
                400: "400px",
                500: "500px",
                600: "600px",
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

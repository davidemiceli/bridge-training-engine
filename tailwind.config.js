module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                menu: ["Staatliches", "sans-serif"],
                play: ["Roboto Condensed", "sans-serif"],
                textcards: ["Noto Sans JP", "sans-serif"],
                cards: ["CardPlaySans", "sans-serif"],
                mono: ["Fira Code", "monospace"],
                display: ["DM Sans", "sans-serif"]
            }
        },
    },
    plugins: [],
    safelist: [
        'text-red-600',
        'text-neutral-800'
    ]
};
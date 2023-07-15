/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "Light-red": "hsl(0, 100%, 67%)",
                "Orangey-yellow": "hsl(39, 100%, 56%)",
                "Green-teal": "hsl(166, 100%, 37%)",
                "Cobalt-blue": "hsl(234, 85%, 45%)",
                "light-slate-blue": "hsl(256, 100%, 67%)",
                "light-royale-blue": "hsl(241, 84%, 54%)",
                "violet-blue": "hsla(256, 72%, 46%, 1)",
                "persian-blue": "hsla(241, 72%, 46%, 0)",
                "pale-blue": "hsl(221, 100%, 96%)",
                "light-lavender": "hsl(241, 100%, 89%)",
                "dark-gray-blue": "hsl(224, 30%, 27%)",
            },
            fontFamily: {
                hanken: ["Hanken Grotesk", "sans-serif"],
            }
        },
    },
    plugins: [],
}


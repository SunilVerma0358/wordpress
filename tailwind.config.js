/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/*.{html,js}"],
    theme: {
        extend: {
            fontfamily: {
                Inter: ['Inter'],
                gilroy: ['Gilroy'],
                kpU: [' Konexy Personal Use']
            },
            backgroundImage: {
                bluepink: ["linear-gradient(91deg, #5F21E9 60.06%, #FA00FF 103.73%)"],
                pinkblue: ["linear-gradient(91deg, #5F21E9 50%, #FA00FF 50%)"]
            },
            boxShadow: {
                cardShadow: ['0px 20px 60.57143px 0px #E5E9F6;'],
                blue: ['0 5px 13px 5px #6022EA'],
                white: ['0 5px 13px 5px #ffff'],
                white2: ['0 2px 5px 2px #ffff'],
            }


        },
    },
    plugins: [],
}
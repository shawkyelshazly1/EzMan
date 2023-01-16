/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				lobster: ["Lobster", "cursive"],
				roboto: ["Roboto", "sans-serif"],
				pacifico: ["Pacifico", "cursive"],
			},
			animation: {
				"spin-slow": "spin 2.7s linear infinite",
				"bounce-slow": "bounce 3s cubic-bezier(.31,.85,.32,.21) infinite",
			},
		},
	},
	plugins: [],
};

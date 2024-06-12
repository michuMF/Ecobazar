/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				softPrimary: "#84D187",
				primary: "#00B207",
				hardPrimary: "#2c742f",
				warning: "#FF8a00",
				danger: "#EA4B48",
				white: "#FFFFFF",
				gray: {
					9: "#1A1A1A",
					8: "#333333",
					7: "#4D4D4D",
					6: "#666666",
					5: "#808080",
					4: "#999999",
					3: "#B3B3B3",
					2: "#CCCCCC",
					1: "#E6E6E6",
					0: "#F2F2F2",
				},
			},
		},
	},
	plugins: [],
}

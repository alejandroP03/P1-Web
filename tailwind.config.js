// tailwind.config.js
const { heroui } = require('@heroui/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",], 
	theme: {
		extend: {
			colors: {
				main: '#f8f2f2',
				sec: '#223c3d',
			},
		},
	},
	darkMode: 'class',
	plugins: [
		heroui({
			defaultTheme: 'light',
			themes: {
				'tgtg-theme': {
					colors: {
						primary: {
							DEFAULT: '#f8f2f2',
							foreground: '#223c3d',
						},
						secondary: {
							DEFAULT: '#223c3d',
							foreground: '#f8f2f2',
						},
					},
				},
			},
		}),
	],
};

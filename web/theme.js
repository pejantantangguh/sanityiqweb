import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
	overrides: {
		MuiCssBaseline: {
			"@global": {
				html: {
					textRendering: "optimizeLegibility",
				},
			},
		},
	},
	palette: {
		primary: {
			light: "#60ad5e",
			main: "#2e7d32",
			dark: "#005005",
			contrastText: "#fff",
		},
		secondary: {
			main: "#19857b",
		},
		error: {
			main: red.A400,
		},
		background: {
			default: "#fff",
		},
	},
	typography: {
		htmlFontSize: 12.5,
		fontWeightBold: 600,
		fontFamily: [
			"Maven Pro",
			"sans-serif",
			"Trebuchet MS",
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
		body1: {
			fontWeight: 500,
			htmlFontSize: 10,
		},
	},
});

export default responsiveFontSizes(theme);

const withPlugins = require("next-compose-plugins");
const withReactSvg = require("next-react-svg");
const optimizedImages = require("next-optimized-images");
const withMDX = require("@next/mdx");
const path = require("path");

module.exports = withPlugins([
	[
		withReactSvg,
		{
			include: path.resolve(__dirname, "public/images/assets/svg"),
		},
	],
	[
		optimizedImages,
		{
			optimizeImagesInDev: true,
		},
	],
	[
		{
			async redirects() {
				return [
					{
						source: "/integration-with-hp-printos",
						destination: "/integration/printiq-hp-printos",
						permanent: true,
					},
				];
			},
		},
	],
	[
		withMDX({
			pageExtensions: ["js", "jsx", "mdx"],
		}),
	],
]);

const withPlugins = require("next-compose-plugins");
const withReactSvg = require("next-react-svg");
const optimizedImages = require("next-optimized-images");
const withMDX = require("@next/mdx");
const path = require("path");

const nextConfig = {
	webpack: (config, { isServer }) => {
		if (isServer) {
			require("./scripts/generate-sitemap");
			console.log("running webpack config to generate sitemap");
		}
		return config;
	},
};

module.exports = withPlugins(
	[
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
				include: path.resolve(__dirname, "public/images/*"),
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
						{
							source: "/enterprise-software",
							destination: "software/iq-core",
							permanent: true,
						},
						{
							source: "/iqconnect",
							destination: "software/iq-connect",
							permanent: true,
						},
						{
							source: "/iqplus",
							destination: "software/iq-plus",
							permanent: true,
						},
						{
							source: "/extending-the-factory",
							destination: "software/iq-extend",
							permanent: true,
						},
						{
							source: "/taking-it-further",
							destination: "software/iq-further",
							permanent: true,
						},
					];
				},
			},
		],
		[
			withMDX({
				pageExtensions: ["js", "jsx", "md", "mdx"],
			}),
		],
	],
	nextConfig
);

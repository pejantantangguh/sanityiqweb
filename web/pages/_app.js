import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "normalize.css";
import "../stylesheet/styles.css";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme.js";
import Header from "../Component/Navigation/Header";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import StickyFooter from "../Component/Layout/Footer";
import Layout from "../Component/Layout/Layout";

export default function MyApp(props) {
	const { Component, pageProps } = props;

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<React.Fragment>
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<DefaultSeo {...SEO} />
			</Head>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</React.Fragment>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};

import Header from "./Header";
import StickyFooter from "./Footer";
import React from "react";
import Router from "next/router";

Router.events.on("routeChangeComplete", (url) => {
	window.analytics.page(url);
});

function Layout({ children }) {
	return (
		<>
			<Header />
			{children}
			<StickyFooter />
		</>
	);
}

export default Layout;

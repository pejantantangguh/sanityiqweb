import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Box,
	Divider,
} from "@material-ui/core";

import MenuContent from "../Navigation/Menu";

const HeaderStyles = makeStyles((theme) => ({
	title: {
		flexGrow: 1,
	},
	button: {
		background:
			"linear-gradient(45deg, rgba(55, 158, 50, 1) 0%, rgba(243, 230, 0, 1) 100% )",
		border: 0,
		borderRadius: 5,
		boxShadow: "0 3px 5px 2px rgba(55, 158, 50, .3)",
		color: "white",
		height: 48,
		padding: "0 10px",
		[theme.breakpoints.only("xs")]: {
			width: "8rem",
		},
	},
	responsiveLogo: {
		[theme.breakpoints.only("xs")]: {
			width: "80%",
			marginLeft: "10px",
		},
		[theme.breakpoints.only("md")]: {},
		[theme.breakpoints.only("lg")]: {},
	},
}));

function Header() {
	const classes = HeaderStyles();
	return (
		<AppBar position="sticky" color="inherit">
			<Toolbar style={{ justifyContent: "space-between" }}>
				<MenuContent />
				<Box justifyContent="center">
					<Link href="/">
						<a target="_blank">
							<img
								src={require("../../public/images/logo/printIQ-logo.png")}
								type="image/jpeg"
								alt="printIQ logo"
								className={classes.responsiveLogo}
							/>
						</a>
					</Link>
				</Box>
				<Box justifyContent="flex-end">
					<Link href="/book-a-demo">
						<a target="_blank">
							<Button className={classes.button}>Book a Demo</Button>
						</a>
					</Link>
				</Box>
			</Toolbar>
		</AppBar>
	);
}

export default Header;

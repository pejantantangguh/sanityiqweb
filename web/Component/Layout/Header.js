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
	Hidden,
	Tabs,
	Tab,
} from "@material-ui/core";

import MenuMobile from "../Navigation/MenuMobile";
import CustomDropDown from "../../assets/CustomDropdown/CustomDropdown";

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
	},
	navLink: {
		marginRight: "25px",
	},
}));

function Header() {
	const classes = HeaderStyles();
	return (
		<AppBar position="sticky" color="inherit">
			<Toolbar style={{ justifyContent: "space-between" }}>
				<Hidden smUp>
					<MenuMobile />
				</Hidden>
				<Box justifyContent="left">
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
					<Hidden smDown>
						<Link href="/">
							<a>
								<Button className={classes.navLink}>Home</Button>
							</a>
						</Link>
						<CustomDropDown
							noLiPadding
							navDropdown
							buttonText="Software"
							buttonProps={{
								className: classes.navLink,
								color: "transparent",
							}}
							dropdownList={[
								<Link href="/software/iq-core">
									<a>IQ Core</a>
								</Link>,
								<Link href="software/iq-connect">
									<a>IQ Connect</a>
								</Link>,
								<Link href="software/iq-plus">
									<a>IQ Plus</a>
								</Link>,
								<Link href="software/iq-extend">
									<a>IQ Extend</a>
								</Link>,
								<Link href="software/iq-further">
									<a>IQ Further</a>
								</Link>,
							]}
						/>
						<CustomDropDown
							noLiPadding
							navDropdown
							buttonText="Company Page"
							buttonProps={{
								className: classes.navLink,
								color: "transparent",
							}}
							dropdownList={[
								<Link href="/contact-us">
									<a>Contact Us</a>
								</Link>,
								<Link href="/whitepaper">
									<a>Whitepaper</a>
								</Link>,
								<Link href="/tech">
									<a>Tech</a>
								</Link>,
								<Link href="/about-us">
									<a>About us</a>
								</Link>,
								<Link href="about-us/who-we-are">
									<a>Meet our team</a>
								</Link>,
							]}
						/>
						<Link href="/segment">
							<a>
								<Button className={classes.navLink}>Segment</Button>
							</a>
						</Link>
					</Hidden>
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

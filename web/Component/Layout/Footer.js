import React from "react";
import Link from "next/link";
import { makeStyles, Container, Grid, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary">
			{"Copyright © "}
			<Link color="inherit" href="/">
				PrintIQ
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
	},
	main: {
		marginTop: theme.spacing(8),
		marginBottom: theme.spacing(2),
	},
	footer: {
		padding: theme.spacing(3, 2),
		marginTop: "auto",
		backgroundColor: "rgb(51, 165, 68)",
		color: "#fff",
	},
	footerNav: {
		"& li": {
			listStyle: "none",
		},
		[theme.breakpoints.up("lg")]: {
			display: "flex",
			"& li": {
				listStyle: "none",
				display: "flex",
				paddingInlineStart: "0px",
			},
		},
	},
	navItem: {
		"& a": {
			display: "inline-block",
			padding: "10px 30px 15px 0",
			color: "#fff",
		},
	},
}));

export default function StickyFooter() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<footer className={classes.footer}>
				<Container>
					<Grid container spacing={6}>
						<Grid item xs={12} sm={6} lg={6}>
							<h3>Explore </h3>
							<ul className={classes.footerNav}>
								<li className={classes.navItem}>
									<Link href="/about-us">
										<a target="_blank">About</a>
									</Link>
								</li>
								<li className={classes.navItem}>
									<Link href="/contact-us">
										<a target="_blank">Contact</a>
									</Link>
								</li>
								<li className={classes.navItem}>
									<Link href="/location">
										<a target="_blank">Location</a>
									</Link>
								</li>
								<li className={classes.navItem}>
									<Link href="/policy">
										<a target="_blank">Privacy Policy</a>
									</Link>
								</li>
							</ul>
						</Grid>
						<Grid item xs={12} sm={6}>
							<h3>Follow Us</h3>
							<ul className={classes.footerNav}>
								<li className={classes.navItem}>
									<Link href="https://www.facebook.com/printIQ">
										<a target="_blank">
											<FacebookIcon fontSize="large" />
										</a>
									</Link>
								</li>
								<li className={classes.navItem}>
									<Link href="https://www.youtube.com/channel/UCJNGxGINQ3zBQ2KVAUzSGPQ">
										<a target="_blank">
											<YouTubeIcon fontSize="large" />
										</a>
									</Link>
								</li>
								<li className={classes.navItem}>
									<Link href="https://www.linkedin.com/company/printiqglobal">
										<a target="_blank">
											<LinkedInIcon fontSize="large" />
										</a>
									</Link>
								</li>
								<li className={classes.navItem}>
									<Link href="https://twitter.com/printiqglobal">
										<a target="_blank">
											<TwitterIcon fontSize="large" />
										</a>
									</Link>
								</li>
							</ul>
						</Grid>
					</Grid>
					{/* <Copyright /> */}
				</Container>
			</footer>
		</div>
	);
}

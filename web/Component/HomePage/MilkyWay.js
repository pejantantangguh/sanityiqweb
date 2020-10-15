import { Box, makeStyles, Typography } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Link from "next/link";
import React from "react";

const styles = makeStyles((theme) => ({
	cloudBackground: {
		background: "rgb(50, 87, 152)",
		background:
			"linear-gradient(0deg,rgba(50, 87, 152, 1) 0%, rgba(0, 25, 80, 1) 100%)",
		background: "url('images/homepage/bg_starry-night2500W.jpg')",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		minHeight: "100%",
		position: "relative",
		opacity: "1",
		backgroundAttachment: "fixed",
		backgroundPosition: "center",
		color: "#fff",
	},
	column: {
		maxWidth: "1500px",
		margin: "auto",
		[theme.breakpoints.up("lg")]: {
			display: "grid",
			gridTemplateColumns: "repeat(4,1fr)",
			height: "100vh",
			position: "relative",
			letterSpacing: "-0.05em",
		},
		[theme.breakpoints.down("md")]: {
			display: "flex",
			flexDirection: "column",
			position: "relative",
			height: "75vh",
		},
		[theme.breakpoints.down("xs")]: {
			display: "flex",
			flexDirection: "column",
			position: "relative",
			height: "75vh",
		},
	},
	header: {
		textAlign: "center",
		[theme.breakpoints.up("lg")]: {
			gridColumn: "1 / span 4",
			color: "#fff",
			margin: "5% 20%",
		},
		[theme.breakpoints.down("md")]: {
			margin: "140px 50px 50px 50px",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "5%",
		},
	},
	contentCopy: {
		textAlign: "center",
		[theme.breakpoints.up("lg")]: {
			gridColumn: "1 / span 4",
			margin: "2rem 10rem 0 10rem",
			"& p": {
				fontSize: "45px",
				fontWeight: "600",
				lineHeight: "52px",
				marginBottom: 0,
			},
		},
		[theme.breakpoints.down("md")]: {
			margin: "2rem 10rem",
			"& p": {
				fontSize: "24px",
				fontWeight: "500",
			},
		},
		[theme.breakpoints.down("xs")]: {
			margin: "2rem 1rem 0 1rem",
			"& p": {
				fontSize: "20px",
				fontWeight: "500",
				textAlign: "center",
				lineHeight: "20px",
			},
		},
	},
	buttonMilk: {
		margin: "auto",
		background: "#fff",
		textDecoration: "none",
		cursor: "pointer",
		borderRadius: "10px",
		border: "0px",
		"&:hover": {
			background: "#000",
			transition: "1s",
		},
		[theme.breakpoints.up("lg")]: {
			gridRow: 3,
			gridColumn: "2/span 2",
			width: "16rem",
			height: "4rem",
		},
		[theme.breakpoints.down("md")]: {
			width: "12rem",
			height: "3rem",
		},
	},
	buttonText: {
		background: "#fff",
		background:
			"linear-gradient(45deg, rgba(255, 0, 255, 1) 0%, rgba(0, 255, 255, 1) 100%)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		fontWeight: "600",
		[theme.breakpoints.up("lg")]: {
			fontSize: "24px",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "20px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "18px",
		},
	},
}));

function MilkyWay() {
	const classes = styles();
	return (
		<div className={classes.cloudBackground}>
			<div className={classes.column}>
				<Box component="section" className={classes.header}>
					<Typography variant="h3">
						The Functionality you've been dreaming of <u>is already here.</u>
					</Typography>
				</Box>
				<Box component="section" className={classes.contentCopy}>
					<Typography variant="body1">
						With printIQ you get a Management Workflow System (far more than
						just an MIS) complete with functionality specific to your industry
						segment.
					</Typography>
				</Box>
				<Link href="/book-a-demo">
					<Box component="button" className={classes.buttonMilk}>
						<Typography component="span" className={classes.buttonText}>
							<a target="_blank">Find Out more</a>
						</Typography>
					</Box>
				</Link>
			</div>
		</div>
	);
}

export default MilkyWay;

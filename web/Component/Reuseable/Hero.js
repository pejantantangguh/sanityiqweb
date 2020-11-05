import {
	Box,
	Container,
	Grid,
	makeStyles,
	Typography,
} from "@material-ui/core";
import styled from "styled-components";
import React from "react";

const styles = makeStyles((theme) => ({
	heroGradient: {
		color: "#000",
		[theme.breakpoints.up("lg")]: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		[theme.breakpoints.down("md")]: {
			height: "100vh",
			textAlign: "center",
		},
		[theme.breakpoints.down("xs")]: {
			height: "100%",
			textAlign: "center",
		},
	},
	heroBanner: {
		[theme.breakpoints.up("lg")]: {
			margin: "auto",
			zIndex: "9999",
		},
		[theme.breakpoints.down("md")]: {
			margin: "auto",
			zIndex: "9999",
			textAlign: "center",
			display: "flex",
			padding: "45% 10%",
		},
		[theme.breakpoints.down("xs")]: {
			padding: "45% 5%",
		},
	},
	heroCopy: {
		textAlign: "center",
		[theme.breakpoints.up("lg")]: {
			alignSelf: "center",
			padding: "3rem 0",
		},
		[theme.breakpoints.down("xs")]: {
			alignSelf: "center",
			padding: "1rem 0",
		},
	},
	h1Main: {
		[theme.breakpoints.up("lg")]: {
			fontSize: "72px",
			fontWeight: "600",
			letterSpacing: "-0.05em",
			lineHeight: "0.98",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "36px",
			fontWeight: "600",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "28px",
			fontWeight: "600",
		},
	},
	pMain: {
		textAlign: "left",
		[theme.breakpoints.up("lg")]: {
			fontSize: "22px",
			fontWeight: "400",
			letterSpacing: "-0.05em",
			lineHeight: "22px",
			marginTop: "1em",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "18px",
			fontWeight: "400",
		},
	},
	pMain2: {
		textAlign: "left",
		[theme.breakpoints.up("lg")]: {
			fontSize: "22px",
			fontWeight: "400",
			letterSpacing: "-0.05em",
			lineHeight: "22px",
			marginTop: "1em",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "18px",
			fontWeight: "400",
		},
	},
}));

function Hero(props) {
	const classes = styles();
	return (
		<div className={classes.heroGradient}>
			<Box className={classes.heroBanner} component="section">
				<Box className={classes.heroCopy} component="section">
					<Typography variant="h1" className={classes.h1Main}>
						{props.title}
					</Typography>
					<Typography variant="body1" component="p" className={classes.pMain}>
						{props.p1content}
					</Typography>
					<Typography variant="body1" component="p" className={classes.pMain2}>
						{props.p2content}
					</Typography>
					<Typography variant="body1" component="p" className={classes.pMain2}>
						{props.p3content}
					</Typography>
				</Box>
			</Box>
		</div>
	);
}

export default Hero;

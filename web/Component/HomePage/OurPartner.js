import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Link from "next/link";

const styles = makeStyles((theme) => ({
	blueBackground: {
		background: "rgb(0, 255, 255)",
		background:
			"linear-gradient(45deg,rgba(0, 255, 255, 1) 0%, rgba(0, 0, 255, 1) 100%)",
	},
	column: {
		height: "100%",
		[theme.breakpoints.up("lg")]: {
			display: "grid",
			gridTemplateColumns: "repeat(6,1fr)",
			gridAutoFlow: "row",
			position: "relative",
			letterSpacing: "-0.05em",
			maxWidth: "1500px",
			margin: "30px auto",
		},
		[theme.breakpoints.down("md")]: {
			textAlign: "center",
		},
		[theme.breakpoints.down("xs")]: {
			textAlign: "center",
		},
	},
	medalImage: {
		textAlign: "center",
		[theme.breakpoints.up("lg")]: {
			gridColumn: "1 / span 2",
			gridRow: "1/span 2",
			alignSelf: "center",
		},
	},
	ImageWidth: {
		[theme.breakpoints.up("lg")]: {
			width: "225px",
		},
		[theme.breakpoints.down("md")]: {
			width: "max-content",
			marginTop: "25px",
		},
	},
	header: {
		color: "#fff",
		alignSelf: "center",
		marginTop: "25px",
		[theme.breakpoints.up("lg")]: {
			"& h3": {
				fontSize: "60px",
				fontWeight: "600",
				marginBottom: "20px",
				padding: "0 105px 0 0",
			},
			gridColumn: "3/span 3",
		},
		[theme.breakpoints.down("md")]: {
			margin: "0 25px",
		},
	},
	copy: {
		color: "#fff",
		marginBottom: "25px",
		[theme.breakpoints.up("lg")]: {
			gridColumn: "3/span 3",
			"& p": {
				fontWeight: 400,
				fontSize: "28px",
				lineHeight: "36px",
				marginTop: "10px",
			},
		},
		[theme.breakpoints.down("md")]: {
			margin: "0 25px",
			"& p": {
				fontWeight: 400,
				fontSize: "20px",
				lineHeight: "24px",
			},
		},
	},
	branding: {
		[theme.breakpoints.up("lg")]: {
			display: "grid",
			gridColumn: "1/span 6",
			gridTemplateColumns: "repeat(6,1fr)",
			gridAutoFlow: "row",
			margin: "0 0 2rem",
			padding: "2rem 0rem 3rem 0rem",
			borderRadius: "12px",
			background: "#fff",
		},
		[theme.breakpoints.down("md")]: {
			display: "grid",
			gridTemplateColumns: "33% 33% 33%",
			background: "#fff",
		},
		[theme.breakpoints.down("xs")]: {
			display: "grid",
			gridTemplateColumns: "75%",
			background: "#fff",
			justifyContent: "center",
			marginTop: "25px",
		},
	},
	onPrintShop: {
		[theme.breakpoints.up("lg")]: {
			width: "80%",
			marginTop: "15px",
		},
		[theme.breakpoints.down("md")]: {
			width: "80%",
			marginTop: "15px",
		},
	},
	sectionButton: {
		textAlign: "center",
		[theme.breakpoints.up("lg")]: {
			gridColumn: "1/span 6",
		},
		[theme.breakpoints.down("md")]: {
			margin: "25px 0",
		},
		[theme.breakpoints.down("xs")]: {
			gridColumn: "2/span 4",
			margin: "25px 0",
		},
	},
	button: {
		borderRadius: "10px",
		cursor: "pointer",
		textDecoration: "none",
		border: 0,
		background: "rgb(255, 255, 0)",
		background:
			"linear-gradient(45deg,rgba(255, 255, 0, 1) 0%, rgba(255, 0, 0, 1) 100%)",
		marginBottom: "30px",
		"&:hover": {
			background: "#000",
			transition: "1s",
		},
		[theme.breakpoints.up("lg")]: {
			width: "16rem",
			height: "4rem",
		},
		[theme.breakpoints.down("md")]: {
			width: "12rem",
			height: "3rem",
		},
	},
	white: {
		background: "#fff",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		[theme.breakpoints.up("lg")]: {
			fontSize: "24px",
			fontWeight: 600,
		},
		[theme.breakpoints.up("md")]: {
			fontSize: "20px",
			fontWeight: 900,
		},
		[theme.breakpoints.up("xs")]: {
			fontSize: "18px",
			fontWeight: 600,
		},
	},
}));
function OurPartner() {
	const classes = styles();

	return (
		<div className={classes.blueBackground}>
			<div className={classes.column}>
				<div className={classes.medalImage}>
					<img
						src="/images/svg/number-1.svg"
						alt="Medal Image"
						className={classes.ImageWidth}
					/>
				</div>
				<Box className={classes.header}>
					<Typography variant="h3">
						To be the best we work with the best
					</Typography>
				</Box>
				<Box className={classes.copy}>
					<Typography variant="body1">
						The simple and obvious solution to grow your business is to
						automate, integrate, and innovate. With printIQ we offer a range of
						integration options with the major third-party applications to
						create the perfect workflow ecosystem.
					</Typography>
				</Box>
				<Box component="section" className={classes.branding}>
					<div>
						<img
							src="/images/svg/integrationpartner/Infigo_145px.svg"
							alt="Infigo Logo"
						/>
					</div>
					<div>
						<img
							src="/images/svg/integrationpartner/Tilia_Labs_145px.svg"
							alt="Tililabs Logo"
						/>
					</div>
					<div>
						<img
							src="/images/svg/integrationpartner/HP_145px.svg"
							alt="HP Logo"
						/>
					</div>
					<div>
						<img
							src="/images/svg/integrationpartner/ESKO_145px.svg"
							alt="Esko Logo"
						/>
					</div>
					<div>
						<img
							src="/images/svg/integrationpartner/Izenda_145px.svg"
							alt="Izenda Logo"
						/>
					</div>
					<div>
						<img
							src="/images/svg/integrationpartner/Enfocus_145px.svg"
							alt="Enfocus Logo"
						/>
					</div>
					<div>
						<img
							src="/images/svg/integrationpartner/XMPIE_145px.svg"
							alt="XMPie Logo"
						/>
					</div>
					<div>
						<img
							src="/images/svg/integrationpartner/QuickBooks_145px.svg"
							alt="Quickbooks Logo"
						/>
					</div>
					<div>
						<img
							src="images/homepage/OnPrintShop.jpg"
							alt="On Printshop Logo"
							className={classes.onPrintShop}
						/>
					</div>
					<div>
						<img
							src="/images/svg/integrationpartner/Zapier_145px.svg"
							alt="Zapier Logo"
						/>
					</div>
					<div>
						<img
							src="/images/svg/integrationpartner/Zoho_145px.svg"
							alt="Zoho Logo"
						/>
					</div>
					<div>
						<img
							src="/images/svg/integrationpartner/Chili_Publish_145px.svg"
							alt="Chili Publish Logo"
						/>
					</div>
					<div>
						<img
							src="/images/svg/integrationpartner/Ultimate_Technologies_145px.svg"
							alt="Ultimate Technologies"
						/>
					</div>
					<div>
						<img
							src="/images/svg/integrationpartner/HybridSoftware_145px.svg"
							alt="Hybrid Software"
						/>
					</div>
					<div>
						<img
							src="/images/svg/integrationpartner/Fuji_Xerox_145px.svg"
							alt="FujiXerox"
						/>
					</div>
					<div>
						<img
							src="/images/svg/integrationpartner/Xero_145px.svg"
							alt="Xero Logo"
						/>
					</div>
					<div>
						<img
							src="/images/svg/integrationpartner/Hubspot_145px.svg"
							alt="Hubspot Logo"
						/>
					</div>
					<div>
						<img
							src="/images/svg/integrationpartner/Salesforce_145px.svg"
							alt="Sales Force Logo"
						/>
					</div>
				</Box>
				<Box component="section" className={classes.sectionButton}>
					<Box component="button" className={classes.button}>
						<Link href="/book-a-demo">
							<a className={classes.white}>Book your Demo</a>
						</Link>
					</Box>
				</Box>
			</div>
		</div>
	);
}

export default OurPartner;

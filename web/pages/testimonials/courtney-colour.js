import { makeStyles, Container, Typography } from "@material-ui/core";

const greenBackground = require("../../public/images/about-us/green-bg.jpg");

const styles = makeStyles((theme) => ({
	greenBg: {
		background: `url('${greenBackground}')`,
		backgroundSize: "cover",
		height: "50vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: "25px",
	},
	centerAlign: {
		textAlign: "center",
		color: "#fff",
	},
	video: {
		maxWidth: "720px",
		height: "480px",
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		margin: "120px auto",
	},
}));
function CourtneyColour() {
	const classes = styles();
	return (
		<>
			<div className={classes.greenBg}>
				<Container className={classes.centerAlign} maxWidth="md">
					<Typography variant="h4">Courtney Colour</Typography>
				</Container>
			</div>
			<Container>
				<Typography variant="body1" component="p" gutterBottom={true}>
					<strong>
						We have been working with printIQ for over 4 years and from the
						beginning we knew we had made the right choice.
					</strong>
					Since our implementation, we have diversified in many areas and
					printIQ has been able to facilitate each stage of our growth. printIQ
					is now an integral part of our business and has helped in automating
					and streamlining our processes. The efficiencies we’ve gained in
					allowing our account managers to quote has increased our quote
					response rate without having to employ dedicated estimators.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					Production scheduling has never been easier, it has allowed us to move
					to a paperless job bag environment with real time data reducing the
					number of errors in production. The reporting module has allowed us to
					understand our operations and make better-calculated decisions for the
					future growth of our business. None of this would be possible without
					a dedicated, innovative and committed team and that is what you get
					from IQ. They’re always happy to bend over backwards to get the job
					done. printIQ has completely changed our business for the better and
					our company couldn’t have gone so far in such a short time without
					printIQ.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					<strong>Aldo Burcheri</strong>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					Courtney Colour
				</Typography>
				<div className={classes.video}>
					<iframe
						width="100%"
						height="480"
						src="https://www.youtube.com/embed/4lbBIkEzcF8"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
			</Container>
		</>
	);
}

export default CourtneyColour;

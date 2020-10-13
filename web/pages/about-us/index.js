import {
	Box,
	Container,
	makeStyles,
	Typography,
	Button,
} from "@material-ui/core";
import Link from "next/link";
import { NextSeo } from "next-seo";

const styles = makeStyles((theme) => ({
	greenBg: {
		background: "url('images/about-us/green-bg.jpg')",
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
	container: {
		marginTop: "120px",
	},
	green: {
		background: "rgb(55, 158, 50)",
		background:
			"linear-gradient(45deg, rgba(55, 158, 50, 1) 0%,rgba(243, 230, 0, 1) 100% )",
		width: "50%",
		textDecoration: "none",
		borderRadius: "10px",
		margin: "20px 0",
		fontSize: "24px",
	},
	box: {
		margin: "15px auto",
		textAlign: "center",
	},
}));

const AboutUs = () => {
	const classes = styles();
	return (
		<>
			<NextSeo
				title="About printIQ, cloud-based management workflow system"
				description="printIQ is a privately-owned company providing IT, custom software."
				openGraph={{
					url: "https://www.printiq.com/about-us",
					title: "printIQ Far more than just an MIS",
					description:
						"printIQ is a privately-owned company providing IT, custom software.",
					images: [
						{
							url:
								"https://iq-website.vercel.app/images/homepage/printIQ-Universe2020-map.jpg",
							width: 800,
							height: 600,
							alt: "printIQ product Map",
						},
					],
					site_name: "https://www.printiq.com/about-us",
					locale: "en_US",
				}}
				twitter={{
					handle: "https://printiq.com/about-us",
					site: "@printIQGlobal",
					cardType: "summary_large_image",
				}}
			/>
			<div className={classes.greenBg}>
				<Container className={classes.centerAlign} maxWidth="md">
					<Typography variant="h2" component="h1">
						About Us
					</Typography>
					<Typography variant="h5" component="p">
						printIQ is a privately-owned company providing IT, custom software
						development, and business solutions to the printing industry. We
						have been delivering IT based solutions to business for the past 18
						years and have staff based in Australia, New Zealand, Canada, North
						America and the UK.
					</Typography>
				</Container>
			</div>
			<Container>
				<Box className={classes.box}>
					<iframe
						width="720"
						height="480"
						src="https://player.vimeo.com/video/458009475"
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</Box>
				<Typography variant="h3" gutterBottom={true}>
					<strong>Why IQ?</strong>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					Customers are looking for a point of difference, at IQ you will
					definitely find one:
				</Typography>

				<Typography variant="body1" component="p" gutterBottom={true}>
					<ul>
						<li>
							We have people that know the various industries and segments in
							which we work, they understand the process, so we’re much more
							than just an IT company
						</li>
						<li>
							We have our own in-house development team so if we don’t have it,
							we can build it
						</li>
						<li>
							In our flagship print product, printIQ, we offer the most
							comprehensive print management system on the market today.
						</li>
						<li>
							We’re changing the face of IT, we’re removing the jargon, we’re
							here to talk and we’ll adapt to fit our customers.
						</li>
						<li>
							Our goal is to be the number one choice for MWS; we’ll achieve
							that one happy customer at a time.
						</li>
					</ul>
				</Typography>
				<Typography variant="h3" gutterBottom={true}>
					<strong>The IQ Way</strong>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					It is our belief that the quality of an IT based product is
					highlighted by its usability. At IQ we specialise in providing
					complete business solutions with a simple and jargon-free approach. We
					achieve this by having staff with both a business and technical
					background so that we have a realistic and logical approach to our
					solutions. Our functional approach means you don’t need to be
					technologically minded, you focus on what you are good at and we’ll do
					the same!
				</Typography>
				<Typography variant="h3" gutterBottom={true}>
					<strong>Goals @IQ</strong>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					Our greatest strength is our ability to listen to what people are
					looking to achieve and then providing a solution that far exceeds
					their expectations. By utilising a true agile development method
					combined with a lean sales implementation we harness real change for
					our customers competitive advantage.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					Our highest priority is to satisfy our customers through effective and
					continuous delivery of market-leading software. Our goal is to
					implement the most comprehensive workflow, on the market today, into
					your business and become your silent partner in print.
				</Typography>
			</Container>
			<Container>
				<Link href="/about-us/who-we-are">
					<a>
						<Button className={classes.green} variant="contained" type="submit">
							Meet our team!
						</Button>
					</a>
				</Link>
			</Container>
		</>
	);
};

export default AboutUs;

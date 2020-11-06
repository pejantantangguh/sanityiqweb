import { makeStyles, Container, Typography } from "@material-ui/core";
import MemberAvatar from "../../Component/AboutUs/ourTeam";
import { NextSeo } from "next-seo";

const blueBackground = require("../../public/images/Blue-to-blue-cloud.jpg");
const styles = makeStyles((theme) => ({
	blueBg: {
		background: `url('${blueBackground}')`,
		backgroundSize: "cover",
		height: "100vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: "25px",
		backgroundColor: "rgba(0,0,0,0.5)",
	},
	centerAlign: {
		textAlign: "center",
		color: "#fff",
	},
}));

function whoWeAre() {
	const classes = styles();
	return (
		<>
			<NextSeo
				title="Why printIQ | Meet our team | Who are we"
				description="We have been delivering IT based solutions to business for the past 18 years and have staff based in Australia, New Zealand, Canada, North America and the UK"
				openGraph={{
					url: "https://www.printiq.com/about-us/who-we-are",
					title: "printIQ Far more than just an MIS",
					description:
						"We have been delivering IT based solutions to business for the past 18 years and have staff based in Australia, New Zealand, Canada, North America and the UK",
					images: [
						{
							url:
								"https://iq-website.vercel.app/images/homepage/printIQ-Universe2020-map.jpg",
							width: 800,
							height: 600,
							alt: "printIQ product Map",
						},
					],
					site_name: "https://www.printiq.com/about-us/who-we-are",
					locale: "en_US",
				}}
				twitter={{
					handle: "https://printiq.com/about-us/who-we-are",
					site: "@printIQGlobal",
					cardType: "summary_large_image",
				}}
			/>
			<div className={classes.blueBg}>
				<Container className={classes.centerAlign} maxWidth="md">
					<Typography variant="h2" component="h1" gutterBottom={true}>
						Who are we?
					</Typography>
					<Typography variant="h6" component="p" gutterBottom={true}>
						IQ is a multinational group of companies employing more than 40
						staff in 5 countries. We currently have product sales, support, and
						development staff in Australia, New Zealand, Canada, the UK and USA.
					</Typography>
					<Typography variant="h6" component="p" gutterBottom={true}>
						In a time when print management software desperately needs to keep
						up with the changing market, very few providers have an active R&D
						programme in place, most are offshore and are simply working through
						a distributor. In contrast, IQ is focused on the future of print, in
						all its facets, and we back this up with our in-house development
						team that are not only accessible but are focused on delivering
						customizations to our core product.
					</Typography>
					{/* <Typography variant="h6" component="p" gutterBottom={true}>
						In fact, we are increasingly one of the only companies that is in a
						position to deliver custom requirements to the printing industries.
						When you combine a comprehensive off the shelf MWS with custom
						software development skills, and print industry experts, our
						dedicated solutions can only deliver exceptional results.
					</Typography> */}
				</Container>
			</div>
			<Container>
				<MemberAvatar />
			</Container>
		</>
	);
}

export default whoWeAre;

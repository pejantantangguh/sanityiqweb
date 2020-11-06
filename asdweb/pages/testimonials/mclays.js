import { makeStyles, Container, Typography } from "@material-ui/core";
import { NextSeo } from "next-seo";
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
}));
function McLays() {
	const classes = styles();
	return (
		<>
			<NextSeo
				title="McLays testimonials | printIQ Reviews"
				description="Why McLays  choose printIQ"
				canonical="https://www.printiq.com/testimonials/mclays"
				openGraph={{
					url: "https://www.printiq.com/testimonials/mclays",
					title: "McLays  testimonials | printIQ Reviews",
					description: "Why McLays  choose printIQ",
					images: [
						{
							url:
								"https://iq-website.vercel.app/images/homepage/printIQ-Universe2020-map.jpg",
							width: 800,
							height: 600,
							alt: "printIQ product Map",
						},
					],
					locale: "en_US",
				}}
				twitter={{
					handle: "https://www.printiq.com/testimonials/mclays",
					site: "@printIQGlobal",
					cardType: "summary_large_image",
				}}
			/>
			<div className={classes.greenBg}>
				<Container className={classes.centerAlign} maxWidth="md">
					<Typography variant="h4">
						We’ve been delighted with the progress made and the positive impact
						printIQ has had.
					</Typography>
				</Container>
			</div>
			<Container>
				<Typography variant="body1" component="p" gutterBottom={true}>
					<strong>McLays</strong>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					Cardiff based digital, print and mail company, A McLay and Company
					took on printIQ late last year and went live in 2020. Mark Vaughan who
					led the installation said:
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					“We’ve been delighted with the progress made and the positive impact
					printIQ has had on the management of our business. The global printIQ
					team have been especially supportive, making themselves available
					around the clock. Overall, we’ve enjoyed a very positive experience
					and would certainly recommend printIQ to anyone in the market for a
					modern management system.”
				</Typography>
			</Container>
		</>
	);
}

export default McLays;

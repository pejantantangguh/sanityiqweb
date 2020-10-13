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
function Soar() {
	const classes = styles();
	return (
		<>
			<NextSeo
				title="Soar testimonials | printIQ Reviews"
				description="Why Soar choose printIQ"
				canonical="https://www.printiq.com/testimonials/soar"
				openGraph={{
					url: "https://www.printiq.com/testimonials/soar",
					title: "Soar testimonials | printIQ Reviews",
					description: "Why Soar choose printIQ",
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
					handle: "https://www.printiq.com/testimonials/soar",
					site: "@printIQGlobal",
					cardType: "summary_large_image",
				}}
			/>
			<div className={classes.greenBg}>
				<Container className={classes.centerAlign} maxWidth="md">
					<Typography variant="h4">
						printIQ has delivered what we hoped
					</Typography>
				</Container>
			</div>
			<Container>
				<Typography variant="body1" component="p" gutterBottom={true}>
					<strong>Integration sees Soar fly</strong>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					Fred Soar, managing director at Soar Printing, says printIQ has
					delivered what he had hoped and he looks forward to taking the
					business further into automation. He says, “It is going pretty good.
					It is really quick for estimating and it has a graphic user interface
					that lets you easily see where work is in the factory and it has great
					integration into the prepress software for our printing devices.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					“Installation went well. It took us awhile because of our size; we had
					to rebuild our estimating rules and the only difficulty has been
					integration into our accounting software but that is to do with our
					accounting software vendor, not IQ.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					“We chose printIQ because it is more than an estimating system. It is
					an integrated workflow for a print business. It integrates with
					Enfocus Switch to allow our customers to price orders and pre-flight
					orders and then place them directly into our workflow ready to go for
					printing.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					“Another benefit is the ability to develop a catalogue of products. We
					are impressed with the ease in which our customers can place orders
					and upload files from a quote and the integration and continuing
					development with third party software from printing machine vendors.
					At Soar Printing, printIQ talks to HP Indigo, Fuji Xerox, Canon and
					soon, it will talk to Heidelberg devices.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					“So, for us that is an ideal situation. We are quite impressed with
					the team at IQ and, if they seem really busy then I think that is
					because they are a victim of their own success. I think it is pretty
					cool what they are doing.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					“We hear from IQ on a daily basis because we are continuing to develop
					things. We feel that we are only scratching the surface with the
					automation at the moment and we want to get more fully embedded.”
				</Typography>
			</Container>
		</>
	);
}

export default Soar;

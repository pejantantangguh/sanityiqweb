import ConnectHero from "../../Component/IQConnect/ConnectHero";
import { ConnectData } from "../../Component/IQConnect/ConnectData";
import { Container, Typography, makeStyles, Box } from "@material-ui/core";
import { NextSeo } from "next-seo";

const styles = makeStyles((theme) => ({
	box: {
		margin: "15px auto",
		textAlign: "center",
	},
}));

function IqConnect() {
	const classes = styles();
	return (
		<>
			<NextSeo
				title="printIQ Connect Modules. Cloud based print MIS with end to end Workflow capabilities"
				description="As an extension to the printIQ Core, we offer our Connect Modules, a range of optional tools that are designed to connect your business to a plethora of options. We have 4 categories in the “connect” range comprised of: API, Automate, Pre-Press, & VDP."
				openGraph={{
					url: "https://www.printiq.com/software/iq-connect",
					title:
						"printIQ Core Moules. Cloud based print MIS with end to end Workflow capabilities",
					description:
						"As an extension to the printIQ Core, we offer our Connect Modules, a range of optional tools that are designed to connect your business to a plethora of options. We have 4 categories in the “connect” range comprised of: API, Automate, Pre-Press, & VDP.",
					images: [
						{
							url:
								"https://iq-website.vercel.app/images/homepage/printIQ-Universe2020-map.jpg",
							width: 800,
							height: 600,
							alt: "printIQ product Map",
						},
					],
					site_name: "https://www.printiq.com/software/iq-connect",
					locale: "en_US",
				}}
				twitter={{
					handle: "https://printiq.com/software/iq-connect",
					site: "@printIQGlobal",
					cardType: "summary_large_image",
				}}
			/>
			<ConnectHero />
			<Container>
				{ConnectData.map((data, index) => (
					<Box key={index}>
						<Typography variant="h5" component="h3" gutterBottom={true}>
							{data.name}
						</Typography>
						<Typography variant="body1" component="p" gutterBottom={true}>
							{data.paragraph1}
						</Typography>
						<Typography variant="body1" component="p" gutterBottom={true}>
							{data.paragraph2}
						</Typography>
						{data.benefits.length > 1 ? (
							<Typography>
								<strong>The Benefits</strong>{" "}
								<ul>
									{data.benefits.map((moduleBenefits) => (
										<li key={moduleBenefits.id}>{moduleBenefits.name}</li>
									))}
								</ul>
							</Typography>
						) : null}
						{data.video ? (
							<Box className={classes.box}>
								<iframe
									width="720"
									height="480"
									src={data.videoURL}
									frameBorder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								/>
							</Box>
						) : null}
					</Box>
				))}
			</Container>
		</>
	);
}

export default IqConnect;

import CoreHero from "../../Component/IQCore/CoreHero";
import { CoreData } from "../../Component/IQCore/CoreData";
import { Container, Typography, makeStyles, Box } from "@material-ui/core";
import { NextSeo } from "next-seo";

const styles = makeStyles((theme) => ({
	box: {
		margin: "15px auto",
		textAlign: "center",
	},
}));

function IqCore() {
	const classes = styles();
	return (
		<>
			<NextSeo
				title="printIQ Core Modules. Cloud based print MIS with end to end Workflow capabilities"
				description="The printIQ Core is made up of 8 modules that create a seamless, end‑to‑end estimating, ordering and production workflow encompassing everything needed for your future success in print."
				openGraph={{
					url: "https://www.printiq.com/software/iq-core",
					title:
						"printIQ Core Moules. Cloud based print MIS with end to end Workflow capabilities",
					description:
						"The printIQ Core is made up of 8 modules that create a seamless, end‑to‑end estimating, ordering and production workflow encompassing everything needed for your future success in print.",
					images: [
						{
							url:
								"https://iq-website.vercel.app/images/homepage/printIQ-Universe2020-map.jpg",
							width: 800,
							height: 600,
							alt: "printIQ product Map",
						},
					],
					site_name: "https://www.printiq.com/software/iq-core",
					locale: "en_US",
				}}
				twitter={{
					handle: "https://printiq.com/software/iq-core",
					site: "@printIQGlobal",
					cardType: "summary_large_image",
				}}
			/>
			<CoreHero />
			<Container>
				{CoreData.map((data, index) => (
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
								<strong>The Benefits</strong>
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

export default IqCore;

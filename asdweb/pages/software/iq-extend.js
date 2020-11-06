import { Container, Typography, makeStyles, Box } from "@material-ui/core";
import ExtendHero from "../../Component/IQExtend/ExtendHero";
import { ExtendData } from "../../Component/IQExtend/ExtendData";
import { NextSeo } from "next-seo";

const styles = makeStyles((theme) => ({
	box: {
		margin: "15px auto",
		textAlign: "center",
	},
}));

function IqExtend() {
	const classes = styles();
	return (
		<>
			<NextSeo
				title="printIQ Extend. Enable the main printIQ instance to hold other branded sites."
				description="We can also include options to add another internal site, a second factory, or even a full satellite location. We have a range of licenses that can be combined into the package at any stage to enhance the overall solution."
				openGraph={{
					url: "https://www.printiq.com/software/iq-extend",
					title:
						"printIQ Extend. Enable the main printIQ instance to hold other branded sites.",
					description:
						"We can also include options to add another internal site, a second factory, or even a full satellite location. We have a range of licenses that can be combined into the package at any stage to enhance the overall solution.",
					images: [
						{
							url:
								"https://iq-website.vercel.app/images/homepage/printIQ-Universe2020-map.jpg",
							width: 800,
							height: 600,
							alt: "printIQ product Map",
						},
					],
					site_name: "https://www.printiq.com/software/iq-extend",
					locale: "en_US",
				}}
				twitter={{
					handle: "https://printiq.com/software/iq-extend",
					site: "@printIQGlobal",
					cardType: "summary_large_image",
				}}
			/>
			<ExtendHero />
			<Container>
				{ExtendData.map((data, index) => (
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

export default IqExtend;

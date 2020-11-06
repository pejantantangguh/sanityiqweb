import { Container, Typography, makeStyles, Box } from "@material-ui/core";
import FurtherHero from "../../Component/IQFurther/FurtherHero";
import { FurtherData } from "../../Component/IQFurther/FurtherData";
import { NextSeo } from "next-seo";

const styles = makeStyles((theme) => ({
	box: {
		margin: "15px auto",
		textAlign: "center",
	},
}));
function IqFurther() {
	const classes = styles();
	return (
		<>
			<FurtherHero />
			<Container>
				{FurtherData.map((data, index) => (
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

export default IqFurther;

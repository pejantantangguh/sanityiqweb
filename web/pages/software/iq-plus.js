import { Container, Box, Typography, makeStyles } from "@material-ui/core";
import PlusHero from "../../Component/IQPlus/PlusHero";
import { PlusData } from "../../Component/IQPlus/PlusData";

const styles = makeStyles((theme) => ({
	box: {
		margin: "15px auto",
		textAlign: "center",
	},
}));

function IqPlus() {
	const classes = styles();
	return (
		<>
			<PlusHero />
			<Container>
				{PlusData.map((data, index) => (
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

export default IqPlus;

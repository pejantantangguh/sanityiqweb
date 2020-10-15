import { Container, Grid, Typography, makeStyles } from "@material-ui/core";

const IQExtendImages = require("../../public/images/IQ_extend.png");

const styles = makeStyles((theme) => ({
	imageResponsive: {
		width: "75%",
		height: "auto",
	},
	centering: {
		textAlign: "center",
	},
}));

function CoreHero() {
	const classes = styles();
	return (
		<>
			<Container>
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="center"
					spacing={3}
				>
					<Grid item xs={12} sm={6} className={classes.centering}>
						<img
							className={classes.imageResponsive}
							src={IQExtendImages}
							alt="IQ Extend image"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Typography variant="h3" component="h1">
							IQ Extend
						</Typography>
						<Typography variant="body1" component="p" gutterBottom={true}>
							We can also include options to add another internal site, a second
							factory, or even a full satellite location. We have a range of
							licenses that can be combined into the package at any stage to
							enhance the overall solution.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export default CoreHero;

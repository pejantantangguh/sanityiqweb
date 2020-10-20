import { Container, Grid, Typography, makeStyles } from "@material-ui/core";

const IQFurtherHero = require("../../public/images/IQ_further.png");

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
							src={IQFurtherHero}
							alt="IQ Further image"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Typography variant="h3" component="h1">
							IQfurther
						</Typography>
						<Typography variant="body1" component="p" gutterBottom={true}>
							The Further range will help you take the next step with your
							business, from key analytics and automated courier booking,
							through to capacity planning, data capture, and even job ganging.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export default CoreHero;

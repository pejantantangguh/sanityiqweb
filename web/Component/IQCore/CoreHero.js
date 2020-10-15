import { Container, Grid, Typography, makeStyles } from "@material-ui/core";

const IQCoreImages = require("../../public/images/IQ_core.png");

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
							src={IQCoreImages}
							alt="IQ core image"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Typography variant="h3" component="h1">
							IQ Core
						</Typography>
						<Typography variant="body1" component="p" gutterBottom={true}>
							The printIQ Core is made up of 8 modules that create a seamless,
							end‑to‑end estimating, ordering and production workflow
							encompassing everything needed for your future success in print.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export default CoreHero;

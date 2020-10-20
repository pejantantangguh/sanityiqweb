import { Container, Grid, Typography, makeStyles } from "@material-ui/core";

const IQPlusImages = require("../../public/images/IQ_plus.png");

const styles = makeStyles((theme) => ({
	imageResponsive: {
		width: "75%",
		height: "auto",
	},
	centering: {
		textAlign: "center",
	},
}));

function PlusHero() {
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
							src={IQPlusImages}
							alt="IQ core image"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Typography variant="h3" component="h1">
							IQplus
						</Typography>
						<Typography variant="body1" component="p" gutterBottom={true}>
							The IQplus range offers two additions to the Core: Approve for
							integrated proofing initiated directly from the production
							workflow, and Store+ to create a logistics operation, with pick
							’n’ pack functionality, from within your print company.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export default PlusHero;

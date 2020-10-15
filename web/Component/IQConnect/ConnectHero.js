import { Container, Grid, Typography, makeStyles } from "@material-ui/core";
const IQConnectImages = require("../../public/images/IQ_connect.png");

const styles = makeStyles((theme) => ({
	imageResponsive: {
		width: "75%",
		height: "auto",
	},
	centering: {
		textAlign: "center",
	},
}));

function ConnectHero() {
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
							src={IQConnectImages}
							alt="IQ connect image"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Typography variant="h3" component="h1">
							IQ connect
						</Typography>
						<Typography variant="body1" component="h2" gutterBottom={true}>
							As an extension to the printIQ Core, we offer our Connect Modules,
							a range of optional tools that are designed to connect your
							business to a plethora of options. We have 4 categories in the
							“connect” range comprised of: API, Automate, Pre-Press, & VDP.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export default ConnectHero;

import { makeStyles, Container, Typography } from "@material-ui/core";

const greenBackground = require("../../public/images/about-us/green-bg.jpg");

const styles = makeStyles((theme) => ({
	greenBg: {
		background: `url('${greenBackground}')`,
		backgroundSize: "cover",
		height: "50vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: "25px",
	},
	centerAlign: {
		textAlign: "center",
		color: "#fff",
	},
}));
function Cushing() {
	const classes = styles();
	return (
		<>
			<div className={classes.greenBg}>
				<Container className={classes.centerAlign} maxWidth="md">
					<Typography variant="h4">
						What is the state of your workflow? Joe Cushing, with printIQ
					</Typography>
				</Container>
				<Container>
					<Typography variant="body1" component="p">
						A recent printIQ implementation has been for Chicago based Cushing.
						Having been a Chicago institution now for 90 years Cushing
						approached the search for a new MIS with the same professionalism
						they apply to all their work. After choosing printIQ as the one that
						“ticked all the boxes” they assigned an internal implementation
						team, headed up by a project architect who led a team of individuals
						from across all departments. This approach ensured that all relevant
						information was gathered at the start of the project, and any
						potential speed bumps were foreseen and quickly resolved.
					</Typography>
				</Container>
			</div>
		</>
	);
}

export default Cushing;

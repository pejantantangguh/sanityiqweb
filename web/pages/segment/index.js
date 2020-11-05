import React from "react";
import Link from "next/link";
import TabPanel from "../../Component/TabPanel/TabPanel";
import a11yProps from "../../Component/TabPanel/a11yProps";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {
	Typography,
	Container,
	Grid,
	makeStyles,
	Button,
	Paper,
} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	button: {
		background:
			"linear-gradient(45deg, rgba(55, 158, 50, 1) 0%, rgba(243, 230, 0, 1) 100% )",
		border: 0,
		borderRadius: 5,
		boxShadow: "0 3px 5px 2px rgba(55, 158, 50, .3)",
		color: "white",
		height: 48,
		padding: "0 10px",
		[theme.breakpoints.only("xs")]: {
			width: "8rem",
		},
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
	},
}));

function Segment(props) {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const classes = styles();
	return (
		<>
			<Container>
				<Grid container spacing={3}>
					<Grid item sm={6}>
						<Typography variant="h4" component="h1">
							Run the right MIS to automate your business
						</Typography>
						<Typography variant="subtitle2" component="p">
							printIQ an help you make the most of your commercial printing
							business. We can help you succeed
						</Typography>
						<Typography variant="subtitle2" component="p" gutterBottom>
							Book a demo with us by clicking the button below
						</Typography>
						<Link href="/book-a-demo">
							<a target="_blank">
								<Button className={classes.button}>Book a Demo</Button>
							</a>
						</Link>
					</Grid>
				</Grid>
				<Grid container spacing={3}>
					<Grid item lg={3}>
						<Paper elevation={4} className={classes.paper}>
							Digital
						</Paper>
					</Grid>
					<Grid item lg={3}>
						<Paper elevation={4} className={classes.paper}>
							Flexo
						</Paper>
					</Grid>
					<Grid item lg={3}>
						<Paper elevation={4} className={classes.paper}>
							Fulfillment
						</Paper>
					</Grid>
					<Grid item lg={3}>
						<Paper elevation={4} className={classes.paper}>
							Labels
						</Paper>
					</Grid>
					<Grid item lg={3}>
						<Paper elevation={4} className={classes.paper}>
							Offset
						</Paper>
					</Grid>
					<Grid item lg={3}>
						<Paper elevation={4} className={classes.paper}>
							Packaging
						</Paper>
					</Grid>
					<Grid item lg={3}>
						<Paper elevation={4} className={classes.paper}>
							Signage
						</Paper>
					</Grid>
					<Grid item lg={3}>
						<Paper elevation={4} className={classes.paper}>
							Wide Format
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export default Segment;

import { makeStyles, Container, Typography } from "@material-ui/core";

const greenBackground = require("../../public/images/about-us/green-bg.jpg");
const cushingCompany = require("../../public/images/testimonials/Cushing-Your-Creative-Printing-Company-90-Years-Compress.jpg");

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
						How did we land on printIQ? They essentially checked all the boxes
						for an MIS solution
					</Typography>
				</Container>
			</div>
			<Container className={classes.centerAlign}>
				<img
					src={cushingCompany}
					alt="cushing company thumbnail"
					style={{
						width: "50%",
						height: "auto",
						margin: "20px auto",
					}}
				/>
			</Container>
			<Container>
				<Typography variant="body1" component="p" gutterBottom={true}>
					“The doors opened at Cushing on October 1, 1929. Yes, twenty-eight
					days prior to the stock market crash. Our first client projects?
					Producing blueprints for the architects, engineering firms, and
					construction companies building the city of Chicago. 90 years later,
					many continue to be customers, and while we still provide drawings,
					their needs have evolved.”
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					“The transition from “blueprinter” to a branded display graphics
					provider ushered in a group of creative personnel who bring a
					different mindset to our workplace. These problem solvers are
					challenged on a daily basis, because no job is the same nowadays. With
					more nuanced projects and complex customer requests, the need for
					improved communication follows. Which means the workflow had to evolve
					as well.”
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					“Our search for a new MIS system began toward the end of 2018. How did
					we land on printIQ? They essentially checked all the boxes for a
					solution. The ultimate requirement was improved communication and
					creating the well-written work order. Our director of information
					technology, David Parkes, took on the role of project architect. He
					organized a team to incorporate all facets of the company, pulling
					from individuals across all departments. All told, it took about
					sixteen weeks to implement the new system.”
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					“While effective and in many ways reliable, our homegrown order and
					production system could not keep pace. With so many technologies,
					quoting standards, media types, and customer ideas (these days, our
					team gets requests to brand almost everything – we installed event
					graphics in a restroom last year!) our approach had to change. How
					could we create repeatable processes to make sure the easy jobs stay
					easy, while providing tools to manage complex requests?”
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					“The estimates for client projects, which are always unique,
					multi-faceted, and at times, challenging, have been simplified. From
					window graphics to custom books, product templates for frequently
					requested items are now available with a few mouse clicks, so while
					there will always be unique projects, every quote no longer needs to
					be built from scratch. And customers now have a simple method for
					viewing and approving proofs of their projects, anywhere, at any
					time.”
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					“Another significant goal of this transition was not driven by
					products or software specifications – it was about our people!
					Employee on-boarding, with all the variations of work we do, was a
					major consideration. There can be a steep learning curve understanding
					the intricacies of the jobs we produce, and already we are seeing new
					team members adopt our processes more swiftly and with far greater
					ease.”
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					“Who knows what interesting client request will come next? There are
					so many possibilities.”Joe Cushing, Executive Vice President, Cushing.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					Joe invites people to visit the Cushing website for updates from the
					team on how employees are faring with the new MIS system, and the
					lessons they have learned along the way. Visit their website
					cushingco.com to see the variety of incredible work they are creating.
					Contact printIQ if your MIS isn’t keeping up the pace.
				</Typography>
			</Container>
		</>
	);
}

export default Cushing;

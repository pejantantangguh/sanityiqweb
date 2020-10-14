const {
	Container,
	Grid,
	Typography,
	makeStyles,
	Box,
} = require("@material-ui/core");

const styles = makeStyles((theme) => ({
	box: {
		margin: "15px auto",
		textAlign: "center",
	},
}));

function IqCore() {
	const classes = styles();
	return (
		<>
			<Container>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<img src="" alt="IQ core image" />
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
			<Container>
				<Typography variant="h5" component="h3" gutterBottom={true}>
					IQcore — Quote Intelligence
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					Quote Intelligence differs from traditional estimating software in
					that it understands the entire production process so it will map out
					all possible alternatives for the job to pass through the factory. We
					do this by integrating all your business rules within the pricing
					logic engine, with all the pricing rules based on your component
					inputs; such as labour, machines and materials. The simplified quoting
					process then adds a layer of control so that those with little or no
					experience can produce a detailed quote whilst ensuring that they can
					only quote what you can produce. The quote is then linked to the file
					upload, job bag and all production, inventory, and shipping details.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					Everyone can quote. Remove the bottle‑neck, take away the technical
					jargon and get the job underway.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					<strong>The Benefits</strong>
					<ul>
						<li>
							Simplified pricing – One standard pricing tool utilised throughout
							the business = simplified pricing.
						</li>
						<li>
							Make quote turnaround your point of difference – No more delays
							while your estimator determines pricing.
						</li>
						<li>
							Integrated Components – The quote is linked to the file upload,
							job bag and details, all centrally managed.
						</li>
					</ul>
				</Typography>
				<Box className={classes.box}>
					<iframe
						width="720"
						height="480"
						src="https://www.youtube.com/embed/i8V5ZEsCFJI"
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</Box>

				<Typography variant="h5" component="h3" gutterBottom={true}>
					IQcore — Workflow Manager
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					Workflow Manager is a dynamic tool that is used throughout the
					application to manage every aspect of your business and allow you to
					gain back control of your workflow. The Workflow Manager is
					essentially a set of “to‑do” activities to which you assign actions,
					alerts and updates. You decide which tasks are completed when, by whom
					and in what order. You create a transparent information network
					throughout the business from which everyone works, and by adding
					control and structure to the process, you determine the end result.
					All information is centralised and accessible to all staff and offers
					seamless transition of work from one department to the next.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					<strong>The Benefits</strong>
					<ul>
						<li>
							Co-ordinated manufacturing: You create a transparent information
							network throughout the business from which everyone works.
						</li>
						<li>
							A disciplined workflow: By adding control and structure to the
							process, you determine the end result.
						</li>
						<li>
							Improved communication without the talk: Information is
							centralised and accessible to all staff and customers.
						</li>
					</ul>
				</Typography>
				<Box className={classes.box}>
					<iframe
						width="720"
						height="480"
						src="https://www.youtube.com/embed/WT-JyWL3zVE"
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</Box>
				<Typography variant="h5" component="h3" gutterBottom={true}>
					IQcore — Factory Manager
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					Factory Manager provides a logical and easy to use communication
					framework for your staff to take control of the production process.
					Ultimately this ensures your staff can manage the production process
					without reliance on any particular individual, and the administration
					of your factory is exponentially simplified. It starts through the
					automation of job processing by monitoring the Workflow Manager and
					all jobs passing from the quote stage into production. This creates a
					centralised and structured flow for jobs as they move through the
					process lifecycle. Each job contains full details of all the resources
					required to convert the raw materials into a higher value saleable
					product, and delivers integrated scheduling functionality to planning
					boards to prioritise the work on the factory floor. It also provides a
					real‑time screen‑based job bag that captures time via online
					activation.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					<strong>The Benefits</strong>
					<ul>
						<li>
							printIQ enables the real control of your factory by providing all
							relevant details pertaining to each job within production.
						</li>
						<li>
							printIQ delivers integrated scheduling functionality to plan and
							prioritise work on the factory floor
						</li>
						<li>
							printIQ delivers a real‑time screen‑based job bag that controls
							the workflow and captures time
						</li>
						<li>
							printIQ speeds up the process by removing the possibility of
							communication errors through staff unavailability.
						</li>
					</ul>
				</Typography>
				<Box className={classes.box}>
					<iframe
						width="720"
						height="480"
						src="https://www.youtube.com/embed/L6h6PbF9P5g"
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</Box>
			</Container>
		</>
	);
}

export default IqCore;

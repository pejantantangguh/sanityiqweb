import { Container, Typography, makeStyles, Box } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const { Alert } = require("@material-ui/lab");

const styles = makeStyles((theme) => ({
	greenHeader: {
		color: theme.palette.primary.main,
	},
}));

function solutionDigital() {
	const classes = styles();
	return (
		<>
			<Container>
				<Typography variant="h3" component="h1" gutterBottom={true}>
					Solution for digital
				</Typography>
				<Box my={3}>
					<Alert info="success">
						If you’re looking for a leaner, more dynamic approach to managing
						print, you’ll find that printIQ is a refreshing change from the “old
						style” of print MIS. With dedicated workflows and streamlined job
						management tools, printIQ is the perfect match for your digital
						print business.
					</Alert>
				</Box>
				<Typography variant="body1" gutterBottom={true}>
					Whether you’re a full digital shop or if you’re just starting to
					expand into the digital space, it’s essential that your software
					supports the environment that you are competing in. With shorter runs,
					faster turnarounds and tighter margins, your business needs to run
					efficiently with a hands-off approach.
				</Typography>
				<Typography
					className={classes.greenHeader}
					variant="h4"
					component="h2"
					gutterBottom={true}
				>
					Your online solution
				</Typography>
				<Typography variant="body1" gutterBottom={true}>
					printIQ is a 100% web based Management Workflow System (Far more than
					just an MIS) so the web2print solution is built-in as opposed to a
					bolt-on solution. It means that everything has been developed with
					your customer’s access in mind.
					<ul>
						<li>Fully secured access to the customer portal</li>
						<li>Customers quote all types of work themselves</li>
						<li>Artwork submission</li>
						<li>Online proofing</li>
						<li>Credit card payment gateway</li>
						<li>Job track module</li>
					</ul>
				</Typography>
				<Typography
					className={classes.greenHeader}
					variant="h4"
					component="h2"
					gutterBottom={true}
				>
					Pricing
				</Typography>
				<Typography variant="body1" gutterBottom={true}>
					We understand that digital pricing is very different to commercial
					print estimating. For this reason, we have added dedicated pricing
					functionality to cope with everything digital. We’re in the unique
					position of being able to support your pricing model while everyone
					else is forcing you to adapt it to suit the limitations of their
					software.
					<ul>
						<li>Click based charging on every print and finishing operation</li>
						<li>Dedicated handling for simplex vs duplex print jobs</li>
						<li>
							Easily create rate cards based on the finished size and quantity
							ordered
						</li>
						<li>
							The ability to use market driven pricing for your sell price while
							still maintaining actual costs
						</li>
					</ul>
				</Typography>
			</Container>
		</>
	);
}

export default solutionDigital;

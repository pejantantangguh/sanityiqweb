import { makeStyles, Container, Typography, List } from "@material-ui/core";

const greenBackground = require("../../public/images/about-us/green-bg.jpg");
const mandyCPC = require("../../public/images/testimonials/Mandy_CPC_Neutek.jpg");

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
	leftAlign: {
		textAlign: "left",
		color: "#fff",
	},
	video: {
		maxWidth: "720px",
		height: "480px",
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		margin: "120px auto",
	},
}));
function cpcColodaro() {
	const classes = styles();
	return (
		<>
			<div className={classes.greenBg}>
				<Container className={classes.centerAlign} maxWidth="md">
					<Typography variant="h4">
						CPC Colorado impressed by the printIQ MWS
					</Typography>
				</Container>
			</div>
			<Container>
				<Typography variant="body1" component="p" gutterBottom={true}>
					One of the more comprehensive printIQ builds undertaken recently has
					been for CPC in Colorado who had recently expanded through the
					acquisition of a new company specializing in Wideformat and Flexo. CPC
					had been using their current MIS for over 25 years. With the
					acquisition of the new company, along with its 2 internal systems, CPC
					wanted to bring everything into their existing MIS system.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					To do this they spent $25000 up front to have two locations, however
					they were still required to VPN to their original site. Mandy from CPC
					said “Once we started working with this amended system, we quickly
					learned that due to the amount of work-arounds that we needed to do to
					make it fit our needs, it wasn’t going to suffice”. CPC began working
					with their MIS company with the intention of addressing the problems
					and helping refine the software to more effectively suit the label
					market.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					After receiving a rather large quote for their MIS to amend the
					software, CPC decided to investigate other available options. Great
					timing for them was the Print conference, where Mandy fortuitously
					crossed paths with Linda Pollard from printIQ. Linda has worked for
					many years in the print MIS field before she made the change to
					printIQ and its MWS (management workflow system). CPC demo-ed multiple
					different sites but found there were less than a handful of companies
					that dealt with all the areas that they specialized in. After running
					into Linda and meeting some of the IQ team CPC staff had the printIQ
					MWS demoed and were blown away. Mandy said “We were pleased to see the
					system gave us 95% of what we were looking for and some unexpected
					additional bonuses. Our group walked away from that conference having
					printIQ as our number 1 choice. However, we were certain we wouldn’t
					be able to afford it”.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					CPC had a comprehensive list of requirements that they were looking
					for:
					<ol>
						<li>
							Ability to encompass all areas of the business: Offset, folding
							cartons, direct mail, digital, digital flexo, flexo and wide
							format printing.
						</li>
						<li>Pricing of both set up costs as well as annual fees</li>
						<li>
							A company that didn’t treat the customers as nothing more than $$
							signs
						</li>
						<li>Ease of use</li>
						<li>Built in accounting – I had to give here.</li>
					</ol>
				</Typography>
				<Typography></Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					After more demos and discussions Linda and the team worked closely
					with the CPC team to get the modules they needed, and CPC realized
					that printIQ was well within their budget. Mandy was impressed saying
					“printIQ really did treat us as actual partners to make the flexo
					components more than we could have asked for.”
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					“I honestly feel like they value my input about changes in the system
					or different aspects that I need. They looked at the big picture of my
					suggestions and have added many of the things I had requested. They
					treated the suggestions as a win/win for both CPC and printIQ.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					CPC has now been working with the printIQ MIS for over a year and
					loves the relationship they’ve built with the IQ team. Mandy is loving
					the customer service from IQ saying, “I have worked closely with
					multiple staff and they are all amazing. They make me feel like I am
					printIQ’s only customer, taking the time to work through the training
					and issues to help me understand the system completely. I am a control
					freak and they have tailored my training to ensure I have the
					knowledge I need.”
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					In addition to being impressed by the support team, CPC says they have
					also experienced many productivity savings with printIQ. From time
					savings during:- estimating, job entry and billing, to fewer questions
					requiring clarification from the production staff, they are very happy
					with their move to printIQ.
				</Typography>
			</Container>
			<Container className={classes.leftAlign}>
				<img
					src={mandyCPC}
					alt="Mandy CPC thumbnail"
					style={{
						width: "20%",
						margin: "20px auto",
					}}
				/>
			</Container>
		</>
	);
}

export default cpcColodaro;

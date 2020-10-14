import Link from "next/link";
import { makeStyles, Container, Typography } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { NextSeo } from "next-seo";
import BookDemoForm from "../../Component/Form/BookDemoForm";

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
	video: {
		maxWidth: "720px",
		height: "480px",
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		margin: "50px auto",
	},
	box: {
		margin: "25px auto",
	},
}));
function iqPrintOs() {
	const classes = styles();
	return (
		<>
			<NextSeo
				title="printIQ Integration with HP PrintOS | HP box integration"
				description="If you’d like to radically simplify the process of receiving, validating, and printing customer files, then our latest printIQ integration with HP PrintOS should pique your interest."
				canonical="https://www.printiq.com/testimonials/courtney-colour"
				openGraph={{
					url: "https://www.printiq.com/testimonials/courtney-colour",
					title: "printIQ Integration with HP PrintOS | HP box integration",
					description:
						"If you’d like to radically simplify the process of receiving, validating, and printing customer files, then our latest printIQ integration with HP PrintOS should pique your interest.",
					images: [
						{
							url:
								"https://iq-website.vercel.app/images/homepage/printIQ-Universe2020-map.jpg",
							width: 800,
							height: 600,
							alt: "printIQ product Map",
						},
					],
					locale: "en_US",
				}}
				twitter={{
					handle: "https://www.printiq.com/integration/printiq-hp-printos",
					site: "@printIQGlobal",
					cardType: "summary_large_image",
				}}
			/>
			<div className={classes.greenBg}>
				<Container className={classes.centerAlign} maxWidth="md">
					<Typography variant="h4">
						printIQ Integration with HP PrintOS
					</Typography>
				</Container>
			</div>
			<Container>
				<div className={classes.video}>
					<iframe
						width="100%"
						height="480"
						src="https://www.youtube.com/embed/FCvtuA90AI0"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
				<Alert severity="success">
					<AlertTitle>
						Tell me more about printIQ and HP PrintOS integration
					</AlertTitle>
					<strong>
						<Link href="/book-a-demo">
							<a>Book a demo</a>
						</Link>
					</strong>{" "}
					with us. Our specialist will reach out to you and explain more about
					printIQ and HP PrintOS integration. Fill in the form{" "}
					<a href="#bookademo">
						<strong>below</strong>
					</a>{" "}
					or click{" "}
					<Link href="/book-a-demo">
						<a>
							<strong>here!</strong>
						</a>
					</Link>
				</Alert>
				<Typography variant="body1" component="p" gutterBottom={true}>
					<strong>
						If you’d like to radically simplify the process of receiving,
						validating, and printing customer files, then our latest printIQ
						integration with HP PrintOS should pique your interest.By combining
						printIQ and HP PrintOS Box you can easily increase the number of
						jobs that enter the production pipeline each and every day, while
						optimizing human resources.
					</strong>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					With printIQ, we already offer the most comprehensive print management
					system on the market today,” explains Mick Rowan, printIQ’s ’s Head of
					Product Development. “However, by integrating with HP Box we are able
					to offer our HP customers a lights-out route to the press.”
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					This fully automated workflow will allow end-users to quote, pay, and
					upload artwork directly onto printIQ (just as they’ve always have).
					However, internally the jobs will route automatically from printIQ to
					HP Box. It’s here that the jobs will be preflighted, imposed and sent
					directly to the press, with status updates and timings logged directly
					in printIQ.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					The key benefit of utilising the IQconnect-Automate HP Box module
					(apart from the cost and timing saving!) is that the workflow is
					managed within printIQ. Therefore, all reporting information is
					returned to printIQ from Box, making the printIQ management workflow
					system, the central command and repository for all job info.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					By creating a flow from printIQ, we are able to trigger reports from
					the actions taking place within the workflow, updating production
					boards and dashboard throughout the business. We’ll keep staff, and
					customers, updated on the progress of their jobs as they travel
					through production.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					This is lights-out fully automated prepress, with two-way
					communication between printIQ and HP PrintOS, ensuring that the data
					is passed between the two systems without the need for human
					intervention. This increases throughput, reduces the opportunity for
					human error, and reduces time to get orders out the door.
				</Typography>

				<Typography variant="body1" component="p" gutterBottom={true}>
					<ol>
						<strong>The Benefits</strong>
						<li>Move jobs into production without human intervention </li>
						<li>Fewer touchpoints means less errors</li>
						<li>Automated preflight of artwork as it is submitted to HP BOX</li>
						<li>Automatically imposed artwork ready to print </li>
						<li>Integrate jobs directly from the customer to the press</li>
					</ol>
				</Typography>
			</Container>

			<Container maxWidth="sm" className={classes.box} id="bookademo">
				<BookDemoForm />
			</Container>
		</>
	);
}

export default iqPrintOs;

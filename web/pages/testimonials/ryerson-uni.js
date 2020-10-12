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
function ryersonUni() {
	const classes = styles();
	return (
		<>
			<div className={classes.greenBg}>
				<Container className={classes.centerAlign} maxWidth="md">
					<Typography variant="h4">
						printlQ simplifies the process at Ryerson
					</Typography>
				</Container>
			</div>
			<Container>
				<Typography variant="body1" component="p" gutterBottom={true}>
					printIQ is a progressive company and as such, is always looking for
					ways to strengthen the future of print as an industry. This forward
					thinking has led to printlQ partnering with Ryerson University’s
					School of Graphic Communications Management program in Toronto. The
					school, in the modern high-tech Heidelberg Centre, is Canada’s only
					degree-granting program for the printing industries.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					Christopher Kular; a professor at the school has worked in the print
					and digital media industries for decades. As a professional working
					and teaching in the industry, Chris has in-depth experience in areas
					from estimating, and production planning, through to selling
					strategies and customer service.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					Chris recently implemented the printlQ management workflow system
					(MWS) at Ryerson for use in the Sign and Display Graphics course. From
					the outset, it became quite clear to Chris that printlQ would add
					significant value for the 60 plus students in his class.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					“All of my students were able to grasp the concepts of calculating the
					cost of consumables, hourly rates and production capabilities. printIQ
					also has features, which allow the user to improve selling strategies
					through material usage and production efficiencies,” he explained.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					“I worked with the printlQ team on an implementation based on our
					workflow for Wide Format printing, proofing, die-cutting, mounting and
					specialty finishing equipment. This obviously took time to configure
					but was well and truly worth the effort once the final instance was
					presented to the students. I’ve used a couple of different MIS
					products over the years, but the printlQ MWS proved to be the most
					comprehensive and yet the easiest to use and understand.”
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					The step-by-step process that forms a major part of any printlQ
					implementation includes check points to ensure accuracy and
					consistency from start to finish. The systematic process made it much
					easier for Chris to teach the key concepts and for the students to
					apply this knowledge when analyzing a job for estimating, and
					production planning.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					Mick Rowan, Product Director and VP at printlQ, believes not only in
					designing & building software to meet the demands of a rapidly
					evolving industry but also in looking to the future needs of the print
					industry as a whole. “Giving Chris’s students access to real-world
					pricing scenarios is invaluable for preparing them to be able to hit
					the ground running when they finish their degree. All of us at printlQ
					are very proud to support Chris and his students in ensuring that the
					printing industry has a bright, robust future ahead.” Explained Rowan
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					Chris had the final word, “I’ve always held the belief that a print
					management system should be easy to use but must also be a capable and
					reliable tool for learning how to be profitable. In both cases printlQ
					ticked the boxes. Overall, I am extremely impressed with printlQ and
					found that the software added enormous value to the teaching of my
					students. It was also very clear that printlQ would be a huge
					advantage in the production and sales management of print and digital
					media products in any print segment.”
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					<strong>Christopher Kular</strong>
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					Ryerson University
				</Typography>
			</Container>
		</>
	);
}

export default ryersonUni;

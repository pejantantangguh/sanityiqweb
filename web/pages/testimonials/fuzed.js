import { makeStyles, Container, Typography } from "@material-ui/core";

const greenBackground = require("../../public/images/about-us/green-bg.jpg");
const fuzedFrog = require("../../public/images/testimonials/frog_colour-1024x517.jpeg");
const gsmCoating = require("../../public/images/testimonials/GSM_coating-1024x768.jpeg");
const paleAle = require("../../public/images/testimonials/pale_ale-1-1024x526.jpg");
const guardianofGalaxy = require("../../public/images/testimonials/GOFG.jpeg");

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
function Fuzed() {
	const classes = styles();
	return (
		<>
			<div className={classes.greenBg}>
				<Container className={classes.centerAlign} maxWidth="md">
					<Typography variant="h4">
						Fuzed gains workflow efficiency with printIQ
					</Typography>
				</Container>
			</div>
			<Container className={classes.centerAlign}>
				<img
					src={fuzedFrog}
					alt="fuzed Frog thumbnail"
					style={{
						width: "50%",
						height: "auto",
						margin: "20px auto",
					}}
				/>
			</Container>
			<Container>
				<Typography variant="body1" component="p" gutterBottom={true}>
					Fuzed, one of the top print service providers in New Zealand, is known
					for helping their clients get the results they want. They offer
					digital, offset, wide format, 3D digital overglossing, and lenticular
					printing – all in one location.
				</Typography>
				<Container className={classes.centerAlign}>
					<img
						src={gsmCoating}
						alt="fuzed Frog thumbnail"
						style={{
							width: "50%",
							height: "auto",
							margin: "20px auto",
						}}
					/>
				</Container>
				<Typography variant="body1" component="p" gutterBottom={true}>
					“We use the latest and most amazing technology, and it can do just
					about anything,” says Matt Mills, General Manager at Fuzed. “Our
					clients typically come to us with a concept, and we figure out how to
					make it work. That’s part of the challenge, it’s what we love to do,
					and it keeps us on our toes!”
				</Typography>
				<Container className={classes.centerAlign}>
					<img
						src={paleAle}
						alt="Pale ale thumbnail"
						style={{
							width: "50%",
							height: "auto",
							margin: "20px auto",
						}}
					/>
				</Container>
				<Typography variant="body1" component="p" gutterBottom={true}>
					With such a broad offering of print capabilities – and with the
					shorter runs and faster turnarounds of digital print – efficiency is a
					top priority for Fuzed, as it is with most printers today. So when it
					came to its management workflow system (MWS), Fuzed turned to printIQ.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					printIQ specializes in IT, custom software development and business
					solutions for the printing industry. Its premier product is a 100%
					web-based management workflow system that supports pricing,
					production, automation, and web-to-print.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					“What really drew us to printIQ is that they look at the world
					slightly differently,” says Matt. “They don’t necessarily think that
					the way it’s always been done is the correct way or should even be the
					‘normal’ way. And that relates exactly to the way we operate. They
					welcome our input. Sometimes we make suggestions and they tell us
					that’s a good point and they’ll roll it out in their next release.
					That’s really beneficial to us – they are working with us; they’re for
					us.”
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					Matt says two other factors drove Fuzed’s decision to work with
					printIQ. First, printIQ has local offices in New Zealand. Second, its
					system is an economical choice that fit Fuzed’s budget. “We had been
					looking for awhile, but the other suppliers didn’t fit what we wanted.
					With printIQ, it’s been great synergy all around,” says Matt. With
					printIQ, Matt says he and his team can log in anywhere in the world,
					track jobs online, and manage the entire project from estimating all
					the way through to invoicing. That kind of efficiency allows Fuzed to
					focus on what they do best: printing award-winning projects, like this
					premiere ticket for the hit film, Guardians of the Galaxy – which was
					the Digital Process Winner in the New Zealand Pride In Print Awards.
				</Typography>
				<Container className={classes.centerAlign}>
					<img
						src={guardianofGalaxy}
						alt="Guardian of galaxy thumbnail"
						style={{
							width: "50%",
							height: "auto",
							margin: "20px auto",
						}}
					/>
				</Container>
				<Typography variant="body1" component="p" gutterBottom={true}>
					“I can do it all online – I don’t actually have to talk to anyone,”
					Matt says with a laugh. “If I’m at the Dscoop conference, for example,
					I can be doing quotes in the middle of the night, local New Zealand
					time. Any issues I find I can just log a ticket and I know printIQ has
					received it and will fix it or tell me what to do. If I had to wait
					until 9 or 10 in the morning just to log that issue, it would take
					that much longer to be fixed.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					“I don’t know too many people in our industry who don’t have clients
					requesting quotes in the middle of the night,” adds Matt, “because
					we’re so busy during the day. This efficiency saves my time and
					theirs, and keeps costs down for everyone.”
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					Matt also likes the fact that the printIQ solution is very
					accommodating and flexible. “There’s not one right way to track and
					quote projects, so the fact that I can do it at least two different
					ways works for me,” says Matt.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					printIQ understands that one size does not fit all, and they customize
					their solutions to meet the varying needs of their print provider
					clients. They also believe in a functional approach, teaching and
					guiding customers through the learning experience rather than doing it
					all for you.
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					“That way you know what to do next time you’re in the same or similar
					situation,” says Matt. “They’re very helpful. In the end, it comes
					down to relationships; if you don’t have a good one, people will pick
					up their toys and go somewhere else. Relationships are how business is
					done.”
				</Typography>
			</Container>
		</>
	);
}

export default Fuzed;

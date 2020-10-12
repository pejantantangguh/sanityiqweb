import {
	Box,
	Container,
	makeStyles,
	Typography,
	Grid,
	Paper,
} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	greenBg: {
		background: "url('images/about-us/green-bg.jpg')",
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
	container: {
		marginTop: "120px",
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: "center",
		whiteSpace: "wrap",
	},
	box: {
		margin: "15px auto",
		textAlign: "center",
	},
}));

const AboutUs = () => {
	const classes = styles();
	return (
		<>
			<div className={classes.greenBg}>
				<Container className={classes.centerAlign} maxWidth="md">
					<Typography variant="h2" component="h1">
						About Us
					</Typography>
					<Typography variant="h5" component="p">
						printIQ is a privately-owned company providing IT, custom software
						development, and business solutions to the printing industry. We
						have been delivering IT based solutions to business for the past 18
						years and have staff based in Australia, New Zealand, Canada, North
						America and the UK.
					</Typography>
				</Container>
			</div>
			<Container>
				<Box className={classes.box}>
					<iframe
						width="720"
						height="480"
						src="https://player.vimeo.com/video/458009475"
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</Box>
				<Typography variant="h3" gutterBottom={true}>
					Why IQ?
				</Typography>
				<Typography variant="body1" component="p" gutterBottom={true}>
					Customers are looking for a point of difference, at IQ you will
					definitely find one:
				</Typography>

				<Typography variant="body1" component="p">
					<ul>
						<li>
							We have people that know the various industries and segments in
							which we work, they understand the process, so we’re much more
							than just an IT company
						</li>
						<li>
							We have our own in-house development team so if we don’t have it,
							we can build it
						</li>
						<li>
							In our flagship print product, printIQ, we offer the most
							comprehensive print management system on the market today.
						</li>
						<li>
							We’re changing the face of IT, we’re removing the jargon, we’re
							here to talk and we’ll adapt to fit our customers.
						</li>
						<li>
							Our goal is to be the number one choice for MWS; we’ll achieve
							that one happy customer at a time.
						</li>
					</ul>
				</Typography>
			</Container>
			{/* <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item lg={4} xs={12}>
            <Paper className={classes.paper}>
              <Typography>NORTH AMERICA</Typography>
              <Typography>Ann Arbor Office</Typography>
              <Typography>
                315 E Eisenhower Parkway, Suite 2, Ann Arbor MI 48108 U.S.A. Toll Free: 800 696 5513
                letstalk@printIQ.com
              </Typography>
            </Paper>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Paper className={classes.paper}>
              <Typography>AUSTRALIA</Typography>
              <Typography>Burleigh Office</Typography>
              <Typography>
                Level Two, McDonald House 37 Connor Street, Burleigh Heads QLD 4220 Australia Call:
                1300 200 143 letstalk@printIQ.com
              </Typography>
            </Paper>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Paper className={classes.paper}>
              <Typography>NEW ZEALAND</Typography>
              <Typography>Wellington Office</Typography>
              <Typography>
                Level Twelve 86 Victoria Street, Wellington 6011 New Zealand Call: 0800 725 662
                letstalk@printIQ.com
              </Typography>
            </Paper>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Paper className={classes.paper}>
              <Typography>UNITED KINGDOM</Typography>
              <Typography>Aylesbury Office</Typography>
              <Typography>
                Unit 8a Ground Floor, Gatehouse Way, Aylesbury, HP19 8XU UK15 Call: 01296 79 22 10
                letstalk@printIQ.com
              </Typography>
            </Paper>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Paper className={classes.paper}>
              <Typography>AUSTRALIA</Typography>
              <Typography>Collingwood Office</Typography>
              <Typography>
                202/134 Cambridge Street Collingwood VIC 3066 Australia Call: 1300 200 143
                letstalk@printIQ.com
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container> */}
		</>
	);
};

export default AboutUs;

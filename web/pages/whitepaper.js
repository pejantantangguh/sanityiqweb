import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import ContactForm from "../Component/Form/ContactForm";

const styles = makeStyles((theme) => ({
  Container: {
    textAlign: "center",
    marginBottom: "50px",
  },
  whitePaperVideo: {
    maxWidth: "720px",
    height: "480px",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: "120px auto 50px",
  },
  header: {
    textAlign: "center",
    fontWeight: 600,
    background: "rgb(55, 158, 50);",
    background: "linear-gradient(45deg, rgba(55, 158, 50, 1) 0%, rgba(243, 230, 0, 1) 100%)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
    [theme.breakpoints.up("lg")]: {
      fontSize: "60px",
      lineHeight: "60px",
      marginTop: 0,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
      lineHeight: "60px",
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "34px",
      lineHeight: "60px",
      textAlign: "center",
      margin: "0 auto",
    },
  },
}));

const whitepaper = () => {
  const classes = styles();
  return (
    <>
      <div className={classes.whitePaperVideo}>
        <iframe
          width="100%"
          height="480"
          src="https://player.vimeo.com/video/458009475"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Container className={classes.Container}>
        <h1 className={classes.header}>White Paper</h1>

        <Typography variant="h5" gutterBottom={true}>
          Print companies are looking carefully at their end-to-end workflows and concluding that
          moving away from traditional Management Information System (MIS) providers to more modern
          platforms and frameworks can provide the growth engine they need.
        </Typography>
        <Typography variant="h5">
          Adopting cloud-based solutions provides the widest array of options, which is why printIQ
          is a leader in flexible print management.
        </Typography>
        <Box>
          <ContactForm />
        </Box>
      </Container>
    </>
  );
};

export default whitepaper;

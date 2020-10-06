const { Container, Grid, Paper, makeStyles } = require("@material-ui/core");
import ContactForm from "../../Component/Form/ContactForm";

const styles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(8),
  },
}));

function TechPage() {
  const classes = styles();
  return (
    <>
      <Container>
        <ContactForm />

        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} lg={4}>
            <Paper className={classes.paper}>Release 38</Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Paper className={classes.paper}>Release 39</Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Paper className={classes.paper}>Release 40</Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default TechPage;

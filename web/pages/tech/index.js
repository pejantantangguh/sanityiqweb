const { Container, Grid, Paper, makeStyles } = require("@material-ui/core");

const styles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function TechPage() {
  const classes = styles();
  return (
    <>
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper className={classes.paper}>Release 38</Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default TechPage;

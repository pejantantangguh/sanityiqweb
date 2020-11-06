import { makeStyles, Typography } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  textBlack: {
    textAlign: "center",
    fontWeight: 600,
  },
  textGreen: {
    background: "rgb(55, 158, 50);",
    background: "linear-gradient(45deg, rgba(55, 158, 50, 1) 0%, rgba(243, 230, 0, 1) 100%)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
  },
}));

const ThankYou = (props) => {
  const classes = styles();
  return (
    <>
      <Typography className={classes.textBlack} variant="h3" gutterBottom={true}>
        Thank you <span className={classes.textGreen}>{props.pageVisited}</span>
      </Typography>
    </>
  );
};

export default ThankYou;

import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import styled from "styled-components";
import React from "react";

const styles = makeStyles((theme) => ({
  heroGradient: {
    background: "rgb(255, 0, 255)",
    background: "linear-gradient(45deg, rgba(255, 0, 255, 1) 0%, rgba(0, 255, 255, 1) 100%)",
    color: "#fff",
    [theme.breakpoints.up("lg")]: {
      height: "100vh",
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gridTemplateRows: "1fr 1fr",
      gridAutoFlow: "row",
      position: "relative",
      letterSpacing: "-0.05em",
      zIndex: 10,
    },
    [theme.breakpoints.down("md")]: {
      height: "100vh",
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      height: "100%",
      textAlign: "center",
    },
  },
  heroBanner: {
    [theme.breakpoints.up("lg")]: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridColumn: "1 / span 4",
      margin: "auto",
      zIndex: "9999",
      maxWidth: "1500px",
    },
    [theme.breakpoints.down("md")]: {
      margin: "auto",
      zIndex: "9999",
      textAlign: "center",
      display: "flex",
      maxWidth: "1500px",
      padding: "45% 10%",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "45% 5%",
    },
  },
  heroCopy: {
    [theme.breakpoints.up("lg")]: {
      alignSelf: "center",
      padding: "3rem",
      color: "#fff",
    },
    [theme.breakpoints.down("xs")]: {
      alignSelf: "center",
      padding: "1rem",
      color: "#fff",
    },
  },
  h1Main: {
    [theme.breakpoints.up("lg")]: {
      fontSize: "72px",
      fontWeight: "600",
      letterSpacing: "-0.05em",
      lineHeight: "0.98",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "36px",
      fontWeight: "600",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "28px",
      fontWeight: "600",
    },
  },
  pMain: {
    [theme.breakpoints.up("lg")]: {
      fontSize: "48px",
      fontWeight: "600",
      letterSpacing: "-0.05em",
      lineHeight: "48px",
      marginTop: "1em",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "22px",
      fontWeight: "600",
    },
  },
  smallBottomLeft: {
    [theme.breakpoints.up("lg")]: {
      position: "relative",
      bottom: "-125px",
      gridRow: 2,
    },
    [theme.breakpoints.down("md")]: {
      position: "absolute",
      bottom: "-10px",
      width: "120px",
      left: 0,
      zIndex: 30,
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  smallBottomRight: {
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      width: "800px",
      right: 0,
      zIndex: 30,
      gridRow: 2,
      bottom: "-30px",
    },
    [theme.breakpoints.down("md")]: {
      position: "absolute",
      bottom: "-10px",
      width: "235px",
      right: 0,
      zIndex: "-20",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  bigBottomRight: {
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      width: "1380px",
      right: 0,
      zIndex: 30,
      gridRow: 2,
      bottom: "-10px",
    },
    [theme.breakpoints.down("md")]: {
      position: "absolute",
      bottom: "-10px",
      width: "250px",
      right: 0,
      zIndex: "20",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

function HomeHero() {
  const classes = styles();
  return (
    <div className={classes.heroGradient}>
      <Box className={classes.heroBanner} component="section">
        <Box className={classes.heroCopy} component="section">
          <Typography variant="h1" className={classes.h1Main}>
            printIQ is your <br /> cloud-based management workflow system.
          </Typography>
          <Typography variant="body1" component="p" className={classes.pMain}>
            Far more than just an MIS.
          </Typography>
        </Box>
      </Box>
      <Box className={classes.smallBottomLeft} component="section">
        <img src="svg/Cloud_1.svg" alt="cloud svg 1" />
      </Box>
      <Box className={classes.smallBottomRight} component="section">
        <img src="svg/Cloud_2.svg" alt="cloud svg 2" />
      </Box>
      <Box className={classes.bigBottomRight} component="section">
        <img src="svg/Cloud_3.svg" alt="cloud svg 3" />
      </Box>
    </div>
  );
}

export default HomeHero;

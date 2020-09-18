import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

// const ArrowIcon = styled.ArrowForwardIcon`
//   color: blue;
// `;

const styles = makeStyles((theme) => ({
  column: {
    [theme.breakpoints.up("lg")]: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      height: "100vh",
      position: "relative",
      letterSpacing: "-0.05em",
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      height: "100vh",
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      height: "100%",
    },
  },
  productMap: {
    [theme.breakpoints.up("lg")]: {
      gridColumn: "1/span 2",
      alignSelf: "center",
      marginTop: "100px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "2rem 0",
      alignSelf: "center",
    },
    [theme.breakpoints.down("xs")]: {
      gridColumn: "1",
      padding: "1rem 0",
      alignSelf: "center",
    },
  },
  productInfo: {
    [theme.breakpoints.up("lg")]: {
      display: "grid",
      gridColumn: "3 / span 2",
      padding: "3rem",
      marginTop: "65px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "1rem 0",
    },
  },
  productInfoCopy: {
    [theme.breakpoints.up("lg")]: {
      fontSize: "60px",
      fontWeight: 600,
      lineHeight: "60px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
      fontWeight: 600,
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "34px",
      fontWeight: 600,
      textAlign: "center",
      margin: "0 auto",
    },
  },
  textGreen: {
    background: "rgb(55, 158, 50)",
    background: "linear-gradient(45deg, rgba(55, 158, 50, 1) 0%,rgba(243, 230,1)100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  futurePrintBullet: {
    " & li": {
      marginBottom: "1rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "22px",
      paddingInlineStart: "20px",
      position: "relative",
      top: "-180px",
      lineHeight: "22px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "22px",
      paddingInlineStart: "35px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
      paddingInlineStart: "35px",
    },
  },
  futurePrintButton: {
    [theme.breakpoints.up("lg")]: {
      position: "relative",
      top: "-90px",
    },
    [theme.breakpoints.down("md")]: {
      margin: "40px 0px 30px 30px",
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      margin: "40px 0",
    },
  },
  buttonBanner: {
    position: "relative",
    "&:hover": {
      background: "#050505",
      color: "#fff",
    },
    [theme.breakpoints.up("lg")]: {
      borderRadius: "10px",
      padding: "1.5rem 2rem",
      width: "16rem",
      border: 0,
      cursor: "pointer",
      height: "5rem",
      background: "rgb(55, 158, 50)",
      background: "linear-gradient( 45deg, rgba(55, 158, 50, 1) 0%, rgba(243, 230, 0, 1) 100% )",
      textDecoration: "none",
      transition: "0.3s",
      display: "inherit",
    },
    [theme.breakpoints.down("md")]: {
      borderRadius: "10px",
      padding: "1.5rem 2rem",
      border: 0,
      cursor: "pointer",
      background: "rgb(55, 158, 50)",
      background: "linear-gradient( 45deg, rgba(55, 158, 50, 1) 0%, rgba(243, 230, 0, 1) 100% )",
      textDecoration: "none",
      transition: "0.3s",
    },
  },
  buttonText: {
    background: "#fff",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: 600,
    [theme.breakpoints.up("lg")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
  },
  arrowIcon: {
    color: "#fff",
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      top: "26px",
    },
    [theme.breakpoints.down("md")]: {
      position: "absolute",
      top: "14px",
    },
  },
}));

function ProductMap() {
  const classes = styles();

  return (
    <div className={classes.column}>
      <Box component="section" className={classes.productMap}>
        <img
          src="/printIQ-Universe2020-map.jpg"
          alt="printIQ universe product map"
          style={{ width: "100%" }}
        />
      </Box>
      <Box component="section" className={classes.productInfo}>
        <Typography variant="h3" className={classes.productInfoCopy}>
          printIQ is everything you'll ever need for
          <span className={classes.textGreen}> your future is print</span>
        </Typography>
        <ul className={classes.futurePrintBullet}>
          <li>Customer Portal for online quoting, ordering and tracking</li>
          <li>Payment gateway</li>
          <li>End to end automated production with live display</li>
          <li>Automated outsourcing</li>
          <li>Inventory and purchasing</li>
          <li>Shipping</li>
          <li>Integration with the major industry players</li>
        </ul>
        <Box component="section" className={classes.futurePrintButton}>
          <Link href="#">
            <a className={classes.buttonBanner}>
              <span className={classes.buttonText}>Find Out more</span>
              <ArrowForwardIcon className={classes.arrowIcon} fontSize="large" />
            </a>
          </Link>
        </Box>
      </Box>
    </div>
  );
}

export default ProductMap;

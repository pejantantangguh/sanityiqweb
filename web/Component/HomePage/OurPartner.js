import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const styles = makeStyles((theme) => ({
  blueBackground: {
    background: "rgb(0, 255, 255)",
    background: "linear-gradient(45deg,rgba(0, 255, 255, 1) 0%, rgba(0, 0, 255, 1) 100%)",
  },
  column: {
    [theme.breakpoints.up("lg")]: {
      height: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(6,1fr)",
      gridAutoFlow: "row",
      position: "relative",
      letterSpacing: "-0.05em",
      maxWidth: "1500px",
      margin: "auto",
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
  medalImage: {
    textAlign: "center",
    [theme.breakpoints.down("lg")]: {
      gridColumn: "1 / span 2",
      gridRow: "1/span 2",
      alignSelf: "center",
    },
  },
  ImageWidth: {
    [theme.breakpoints.up("lg")]: {
      width: "225px",
    },
    [theme.breakpoints.down("md")]: {
      width: "max-content",
      marginTop: "25px",
    },
  },
  header: {
    color: "#fff",
    alignSelf: "center",
    [theme.breakpoints.up("lg")]: {
      "& h3": {
        fontSize: "60px",
        fontWeight: "600",
        marginBottom: 0,
        padding: "0 105px 0 0",
      },
      gridColumn: "3/span 3",
    },
    [theme.breakpoints.down("md")]: {
      margin: "0 25px",
    },
  },
  copy: {
    color: "#fff",
    [theme.breakpoints.up("lg")]: {
      gridColumn: "3/span 3",
      "& p": {
        fontWeight: 400,
        fontSize: "28px",
        lineHeight: "36px",
        marginTop: "10px",
      },
    },
    [theme.breakpoints.down("md")]: {
      margin: "0 25px",
      "& p": {
        fontWeight: 400,
        fontSize: "20px",
        lineHeight: "24px",
      },
    },
  },
  branding: {
    display: "grid",
    gridColumn: "1/span 6",
    gridTemplateColumns: "repeat(6,1fr)",
    gridAutoFlow: "row",
    margin: "0 0 2rem",
    padding: "2rem 0rem 3rem 0rem",
    borderRadius: "12px",
    background: "#fff",
  },
  onPrintShop: {
    [theme.breakpoints.up("lg")]: {
      width: "80%",
      marginTop: "15px",
    },
  },
}));
function OurPartner() {
  const classes = styles();

  return (
    <div className={classes.blueBackground}>
      <div className={classes.column}>
        <div className={classes.medalImage}>
          <img src="/svg/number-1.svg" alt="Medal Image" className={classes.ImageWidth} />
        </div>
        <Box className={classes.header}>
          <Typography variant="h3">To be the best we work with the best</Typography>
        </Box>
        <Box className={classes.copy}>
          <Typography variant="body1">
            The simple and obvious solution to grow your business is to automate, integrate, and
            innovate. With printIQ we offer a range of integration options with the major
            third-party applications to create the perfect workflow ecosystem.
          </Typography>
        </Box>
        <Box component="section" className={classes.branding}>
          <div>
            <img src="/svg/integrationpartner/Infigo_145px.svg" alt="Infigo Logo" />
          </div>
          <div>
            <img src="/svg/integrationpartner/Tilia_Labs_145px.svg" alt="Tililabs Logo" />
          </div>
          <div>
            <img src="/svg/integrationpartner/HP_145px.svg" alt="HP Logo" />
          </div>
          <div>
            <img src="/svg/integrationpartner/ESKO_145px.svg" alt="Esko Logo" />
          </div>
          <div>
            <img src="/svg/integrationpartner/Izenda_145px.svg" alt="Izenda Logo" />
          </div>
          <div>
            <img src="/svg/integrationpartner/Enfocus_145px.svg" alt="Enfocus Logo" />
          </div>
          <div>
            <img src="/svg/integrationpartner/XMPIE_145px.svg" alt="XMPie Logo" />
          </div>
          <div>
            <img src="/svg/integrationpartner/QuickBooks_145px.svg" alt="Quickbooks Logo" />
          </div>
          <div>
            <img
              src="/homepage/OnPrintShop.jpg"
              alt="On Printshop Logo"
              className={classes.onPrintShop}
            />
          </div>
          <div>
            <img src="/svg/integrationpartner/Zapier_145px.svg" alt="Zapier Logo" />
          </div>
          <div>
            <img src="/svg/integrationpartner/Zoho_145px.svg" alt="Zoho Logo" />
          </div>
          <div>
            <img src="/svg/integrationpartner/Chili_Publish_145px.svg" alt="Chili Publish Logo" />
          </div>
          <div>
            <img
              src="/svg/integrationpartner/Ultimate_Technologies_145px.svg"
              alt="Ultimate Technologies"
            />
          </div>
          <div>
            <img src="/svg/integrationpartner/HybridSoftware_145px.svg" alt="Hybrid Software" />
          </div>
          <div>
            <img src="/svg/integrationpartner/Fuji_Xerox_145px.svg" alt="FujiXerox" />
          </div>
          <div>
            <img src="/svg/integrationpartner/Xero_145px.svg" alt="Xero Logo" />
          </div>
          <div>
            <img src="/svg/integrationpartner/Hubspot_145px.svg" alt="Hubspot Logo" />
          </div>
          <div>
            <img src="/svg/integrationpartner/Salesforce_145px.svg" alt="Sales Force Logo" />
          </div>
        </Box>
      </div>
    </div>
  );
}

export default OurPartner;

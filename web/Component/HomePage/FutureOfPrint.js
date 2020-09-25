import { Box, makeStyles, Typography } from "@material-ui/core";
import Link from "next/link";
import React from "react";

const styles = makeStyles((theme) => ({
  column: {
    [theme.breakpoints.up("lg")]: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      height: "100%",
      maxWidth: "1500px",
      margin: "auto",
      position: "relative",
      letterSpacing: "-0.05em",
    },
    [theme.breakpoints.down("md")]: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      height: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      height: "100%",
    },
  },
  header: {
    "& h3": {
      [theme.breakpoints.up("lg")]: {
        fontSize: "60px",
        fontWeight: 600,
        margin: "0 auto",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "36px",
        fontWeight: 600,
        margin: "0 auto",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "30px",
        fontWeight: 600,
        margin: "0 auto",
      },
    },
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      gridColumn: "1 / span 4",
      marginTop: "100px",
      letterSpacing: "-0.1em",
      marginBottom: "12px",
    },
    [theme.breakpoints.down("md")]: {
      gridColumn: "1 / span 2",
      marginTop: "100px",
      letterSpacing: "-0.1em",
      marginBottom: "12px",
    },
  },
  greenText: {
    background: "rgb(55, 158, 50);",
    background: "linear-gradient(45deg, rgba(55, 158, 50, 1) 0%, rgba(243, 230, 0, 1) 100%)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",

    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  segmentCard: {
    margin: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      flexDirection: "column",
    },
    [theme.breakpoints.down("md")]: {
      margin: "25px 2rem",
      "& p": {
        fontSize: "24px",
        lineHeight: "24px",
      },
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "24px",
      margin: "25px 2rem",
      "& p": {
        fontSize: "16px",
        lineHeight: "16px",
      },
    },
  },
  imageSegmentation: {
    width: "40%",
  },
  green: {
    marginTop: 0,
    color: "rgb(51, 165, 68)",
    lineHeight: "20px",
    [theme.breakpoints.up("lg")]: {
      fontSize: "28px",
      fontWeight: 600,
      marginTop: 0,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "24px",
      fontWeight: 600,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      fontWeight: 600,
    },
  },
  cardCopy: {
    [theme.breakpoints.up("lg")]: {
      margin: "2px 1em",
      lineHeight: "1.2em",
      fontSize: "1.2em",
      fontWeight: "600",
    },
  },
  sectionButton: {
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      gridColumn: "2/span 2",
      marginBottom: "50px",
    },
    [theme.breakpoints.down("md")]: {
      gridColumn: "1/span 2",
      marginBottom: "45px",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "32px",
    },
  },
  button: {
    borderRadius: "10px",
    cursor: "pointer",
    textDecoration: "none",
    border: 0,
    background: "rgb(55, 158, 50)",
    background: "linear-gradient(45deg,rgba(55, 158, 50, 1) 0%, rgba(243, 230, 0, 1) 100%)",
    [theme.breakpoints.up("lg")]: {
      width: "16rem",
      height: "4rem",
    },
    [theme.breakpoints.down("md")]: {
      width: "12rem",
      height: "3rem",
    },
  },
  white: {
    background: "#fff",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    [theme.breakpoints.up("lg")]: {
      fontSize: "24px",
      fontWeight: 600,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
      fontWeight: 900,
    },
    [theme.breakpoints.up("xs")]: {
      fontSize: "18px",
      fontWeight: 600,
    },
  },
}));

function FutureOfPrint() {
  const classes = styles();
  return (
    <div className={classes.column}>
      <Box component="section" className={classes.header}>
        <Typography variant="h3">
          Welcome to <span className={classes.greenText}>the future of Print.</span>
        </Typography>
      </Box>
      <Box component="section" className={classes.segmentCard}>
        <img src="/svg/icons_digital_green.svg" className={classes.imageSegmentation} />
        <Typography variant="h3" className={classes.green}>
          Digital
        </Typography>
        <Typography variant="body1" className={classes.cardCopy}>
          With dedicated workflows and streamlined job management tools, printIQ is the perfect
          match for your digital print business.
        </Typography>
      </Box>
      <Box component="section" className={classes.segmentCard}>
        <img src="/svg/icons_flexo_green.svg" className={classes.imageSegmentation} />
        <Typography variant="h3" className={classes.green}>
          Flexo
        </Typography>
        <Typography variant="body1" className={classes.cardCopy}>
          The printIQ MWS understands the unique flexo requirements, from die‑cutting, through to
          hot foils, and all the substrates you manage.
        </Typography>
      </Box>
      <Box component="section" className={classes.segmentCard}>
        <img src="/svg/icons_fulfilment_green.svg" className={classes.imageSegmentation} />
        <Typography variant="h3" className={classes.green}>
          Fulfillment
        </Typography>
        <Typography variant="body1" className={classes.cardCopy}>
          printIQ has been developed to handle the fulfillment process, from receiving, storage, and
          order processing, through to pick & pack, and shipping.
        </Typography>
      </Box>
      <Box component="section" className={classes.segmentCard}>
        <img src="/svg/icons_labels_green.svg" className={classes.imageSegmentation} />
        <Typography variant="h3" className={classes.green}>
          Labels
        </Typography>
        <Typography variant="body1" className={classes.cardCopy}>
          With a searchable die library, advanced imposition control, and custom size and shape
          calculators, printIQ is a perfect fit for labels.
        </Typography>
      </Box>
      <Box component="section" className={classes.segmentCard}>
        <img src="/svg/icons_offset_green.svg" className={classes.imageSegmentation} />
        <Typography variant="h3" className={classes.green}>
          Offset
        </Typography>
        <Typography variant="body1" className={classes.cardCopy}>
          Solve your estimating turnaround problem, take your commercial print business online and
          take the leap into being an efficient, modern print company.
        </Typography>
      </Box>
      <Box component="section" className={classes.segmentCard}>
        <img src="/svg/icons_packaging_green.svg" className={classes.imageSegmentation} />
        <Typography variant="h3" className={classes.green}>
          Packaging
        </Typography>
        <Typography variant="body1" className={classes.cardCopy}>
          With printIQ you get a product that understands the packaging workflow rather than a print
          MIS trying to move into a new segment.
        </Typography>
      </Box>
      <Box component="section" className={classes.segmentCard}>
        <img src="/svg/icons_signage_green.svg" className={classes.imageSegmentation} />
        <Typography variant="h3" className={classes.green}>
          Signage
        </Typography>
        <Typography variant="body1" className={classes.cardCopy}>
          A manufacturing ERP that might cope with print or a print MIS that can handle a little
          manufacturing? What if we told you that printIQ does both?
        </Typography>
      </Box>
      <Box component="section" className={classes.segmentCard}>
        <img src="/svg/icons_wide_format_green.svg" className={classes.imageSegmentation} />
        <Typography variant="h3" className={classes.green}>
          Wide Format
        </Typography>
        <Typography variant="body1" className={classes.cardCopy}>
          We’ve added dedicated pricing functionality to cope with everything sheet & roll fed so
          that printIQ is in a perfect position to support your business.
        </Typography>
      </Box>
      <Box component="section" className={classes.sectionButton}>
        <Box component="button" className={classes.button}>
          <Link href="#">
            <a className={classes.white}>Book your Demo</a>
          </Link>
        </Box>
      </Box>
    </div>
  );
}

export default FutureOfPrint;

import React, { useEffect } from "react";
import Link from "next/link";
import { makeStyles, Typography, Box } from "@material-ui/core";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";

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
    textAlign: "center",
    color: "rgb(51, 165, 68)",
    "& h3": {
      [theme.breakpoints.up("lg")]: {
        fontSize: "70px",
        fontWeight: 600,
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "32px",
        fontWeight: 600,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "34px",
        fontWeight: 600,
        marginBottom: 0,
      },
    },
    [theme.breakpoints.up("lg")]: {
      gridColumn: "1/span 4",
      margin: 0,
    },
  },
  content: {
    [theme.breakpoints.up("lg")]: {
      gridColumn: "1/span 4",
      justifyItems: "center",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("xs")]: {
      justifyItems: "center",
    },
  },
  clientName: {
    fontWeight: 600,
    [theme.breakpoints.up("lg")]: {
      fontSize: "40px",
      margin: "0",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "26px",
    },
  },
  clientCopy: {
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.8em",
      padding: "0 20px 20px 20px",
      marginTop: "21px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "24px",
    },
  },
}));

const CardCustom = styled.div`
  text-align: center;
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.1);
  height: 55vh !important;
  margin: 50px 35px;
  background: white;
  border-radius: 20px;
`;
const Image = styled.img`
  border-radius: 40px;
  padding: 2rem;
  max-width: 75% !important;
`;
const breakpoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 850, itemsToShow: 1 },
  { width: 1150, itemsToShow: 3 },
  { width: 1450, itemsToShow: 3 },
  { width: 1750, itemsToShow: 3 },
];

function Testimonials() {
  const classes = styles();

  return (
    <div className={classes.column}>
      <Box component="section" className={classes.header}>
        <Typography variant="h3">Hear from our clients ...</Typography>
      </Box>
      <Box component="section" className={classes.content}>
        <Carousel breakPoints={breakpoints}>
          <CardCustom>
            <Image src="/homepage/Cushing.jpg" alt="Cushing Images" title="Cushing" />

            <Typography component="h3" className={classes.clientName}>
              Cushing
            </Typography>
            <Typography component="p" variant="body1" className={classes.clientCopy}>
              How did we land on printIQ? They essentially checked all the boxes for an MIS
              solution.
            </Typography>
          </CardCustom>
          <CardCustom>
            <Image src="/homepage/MattMillsFuzed.jpg" alt="Fuzed Images" title="Fuzed" />

            <Typography component="h3" className={classes.clientName}>
              Fuzed
            </Typography>
            <Typography component="p" variant="body1" className={classes.clientCopy}>
              With printIQ we can log in anywhere in the world to track and manage the entire
              project.
            </Typography>
          </CardCustom>
          <CardCustom>
            <Image
              src="/homepage/CourtneyColour.jpg"
              alt="Courtney Colour Images"
              title="Courtney Colour"
            />

            <Typography component="h3" className={classes.clientName}>
              Courtney Colour
            </Typography>
            <Typography component="p" variant="body1" className={classes.clientCopy}>
              We have been with printIQ for 4 years and knew from the beginning we’d made the right
              choice.
            </Typography>
          </CardCustom>
          <CardCustom>
            <Image
              src="/homepage/RyersonUniversity.jpg"
              alt="Ryerson University Images"
              title="Ryerson University"
            />

            <Typography component="h3" className={classes.clientName}>
              Ryerson University
            </Typography>
            <Typography component="p" variant="body1" className={classes.clientCopy}>
              The printlQ software added enormous value to the teaching of my students.
            </Typography>
          </CardCustom>
          <CardCustom>
            <Image src="/homepage/CPC-Pic.jpg" alt="CPC Neutek Images" title="CPC Neutek" />

            <Typography component="h3" className={classes.clientName}>
              CPC Neutek
            </Typography>
            <Typography component="p" variant="body1" className={classes.clientCopy}>
              We’ve been impressed by the support team and experienced many productivity savings
              with printIQ.
            </Typography>
          </CardCustom>
          <CardCustom>
            <Image src="/homepage/Soar-Pic.jpg" alt="Soar Print Images" title="Soar Print" />

            <Typography component="h3" className={classes.clientName}>
              Soar Print
            </Typography>
            <Typography component="p" variant="body1" className={classes.clientCopy}>
              printIQ has delivered what we hoped and we look forward to taking the business further
              into automation.
            </Typography>
          </CardCustom>
        </Carousel>
      </Box>
    </div>
  );
}

export default Testimonials;
{
  /* <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Cushing Images"
              title="Cushing"
              image="/homepage/Cushing.jpg"
              className={classes.cardImage}
            />

            <CardContent>
              <Typography component="h3">Cushing </Typography>
              <Typography component="p" variant="body1">
                How did we land on printIQ? They essentially checked all the boxes for an MIS
                solution.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Cushing Images"
              title="Cushing"
              image="/homepage/Cushing.jpg"
              className={classes.cardImage}
            />

            <CardContent>
              <Typography component="h3">Cushing </Typography>
              <Typography component="p" variant="body1">
                How did we land on printIQ? They essentially checked all the boxes for an MIS
                solution.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card> */
}

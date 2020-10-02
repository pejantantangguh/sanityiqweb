import { Box, makeStyles, Container } from "@material-ui/core";
import React from "react";
import ContactForm from "../Component/Form/ContactForm";

const styles = makeStyles((theme) => ({
  videoContactUs: {
    maxWidth: "720px",
    height: "480px",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: "120px auto",
  },
  column: {
    height: "100%",
    [theme.breakpoints.up("lg")]: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      maxWidth: "1500px",
      margin: "auto",
      position: "relative",
      letterSpacing: "-0.05em",
    },
    [theme.breakpoints.down("md")]: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
    },
  },
  contactMap: {
    gridColumn: "1/span 2",
    alignSelf: "center",
    marginTop: 0,
  },
  header: {
    fontWeight: "600",
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
  content: {
    fontWeight: "400",
    [theme.breakpoints.up("lg")]: {
      fontSize: "28px",
      lineHeight: "36px",
      marginTop: "10px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "24px",
      lineHeight: "1.5",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      lineHeight: "24px",
    },
  },
  contactTable: {
    [theme.breakpoints.up("lg")]: {
      display: "grid",
      gridColumn: "3/span 2",
      padding: "3rem",
    },
  },
}));
function ContactUs() {
  const classes = styles();
  return (
    <>
      <div className={classes.videoContactUs}>
        <iframe
          width="100%"
          height="480"
          src="https://player.vimeo.com/video/458009475"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className={classes.column}>
        <section className={classes.contactMap}>
          <Container>
            <h3 className={classes.header}>Contact us</h3>
            <p className={classes.content}>
              Thanks for taking the time to find out more about the future of print with the printIQ
              ecosystem. All you have to do is fill in the form and one of our specialists will
              reach out and show you how to turn your plant into a well-oiled machine.
            </p>
            <img
              src="/images/homepage/printIQ_Universe2020_1000pxX1000px.jpg"
              alt="printIQ Universe"
              style={{ width: "100%" }}
            />
          </Container>
        </section>
        <section className={classes.contactTable}>
          <Container>
            <ContactForm />
          </Container>
        </section>
      </div>
    </>
  );
}

export default ContactUs;

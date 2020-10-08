import { Box, Container, makeStyles, Typography, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import TextInput from "../Component/Form/TextInput";
import WhitePaperButton from "../Component/Reuseable/WhitePaperButton";

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
  green: {
    background: "rgb(55, 158, 50)",
    background: "linear-gradient(45deg, rgba(55, 158, 50, 1) 0%,rgba(243, 230, 0, 1) 100% )",
    width: "50%",
    textDecoration: "none",
    borderRadius: "10px",
    marginTop: "20px",
  },
  box: {
    width: "75%",
    margin: "15px auto",
  },
}));

const whitepaper = () => {
  const [isSubmit, setSubmit] = React.useState(true);
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
        <Typography variant="h5" gutterBottom={true}>
          Adopting cloud-based solutions provides the widest array of options, which is why printIQ
          is a leader in flexible print management.
        </Typography>
        <Typography variant="h5" gutterBottom={true}>
          Our goal has been to address all of the weak points of the traditional print company with
          the goal of building an MWS that transitions your business large or small, into today’s
          print market.
        </Typography>
        <Box className={classes.box}>
          {isSubmit ? (
            <div>
              <Alert severity="success">Thank you for your submission!</Alert>
              <WhitePaperButton />
            </div>
          ) : (
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                company: "",
                email: "",
              }}
              validationSchema={Yup.object({
                firstName: Yup.string().max(15, "Must be 15 characters or less"),
                lastName: Yup.string()
                  .max(20, "Must be 20 characters or less")
                  .required("Required"),
                email: Yup.string().email("Invalid email addresss`").required("Required"),
                company: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
              })}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                const response = await fetch(
                  "https://hooks.zapier.com/hooks/catch/89032/ofb0dcz/",
                  {
                    method: "POST",
                    body: JSON.stringify(values),
                  }
                );
                if (response.status == 200) {
                  setSubmitting(false);
                  setSubmit(true);
                } else {
                  setSubmit(false);
                }
              }}
            >
              <Form className={classes.spacing}>
                <TextInput
                  label="First Name"
                  name="firstName"
                  type="text"
                  placeholder="First name please"
                />
                <TextInput
                  label="Last Name"
                  name="lastName"
                  type="text"
                  placeholder="Last name please"
                />
                <TextInput label="Company*" name="company" type="text" placeholder="Company" />
                <TextInput label="Email*" name="email" type="email" placeholder="email" />
                <Button className={classes.green} variant="contained" type="submit">
                  Submit
                </Button>
              </Form>
            </Formik>
          )}
        </Box>
      </Container>
    </>
  );
};

export default whitepaper;

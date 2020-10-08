import Link from "next/link";
import {
  Container,
  Grid,
  Paper,
  makeStyles,
  Typography,
  List,
  ListItem,
  Box,
  Button,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "../../Component/Form/TextInput";
import ThankYou from "../../Component/Reuseable/ThankYou";

const styles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(8),
  },
  box: {
    marginTop: theme.spacing(2),
  },
  listHeader: {
    fontWeight: 600,
    fontSize: "24px",
  },
  list: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  box: {
    width: "75%",
    margin: "15px auto",
  },
  green: {
    background: "rgb(55, 158, 50)",
    background: "linear-gradient(45deg, rgba(55, 158, 50, 1) 0%,rgba(243, 230, 0, 1) 100% )",
    width: "25%",
    textDecoration: "none",
    borderRadius: "10px",
    margin: "20px auto",
    color: "#fff",
  },
}));

function TechPage() {
  const classes = styles();
  const [isSubmit, setSubmit] = React.useState(true);
  return (
    <>
      <Container>
        <Typography variant="h3" component="h1" gutterBottom={true}>
          Download our product Guide
        </Typography>
        <Typography variant="body1" component="p" gutterBottom={true}>
          The printIQ Core is made up of 8 modules that create a seamless, end-to-end workflow.
          However, with printIQ you also get the option to add an array of extra modules to the Core
          to create your perfect workflow. This includes a range of third party options that fully
          integrate with printIQ, removing those integration headaches. Our range of integrated
          modules are designed to connect to an array of options, from file verification, to VDP,
          web applications, and even other printers.
        </Typography>
        <Typography variant="body1" component="p" gutterBottom={true}>
          To get you started here’s a brief description of the core along with (some) of the extra
          options that you can add to create the perfect workflow:
        </Typography>
        <Alert severity="success">
          <AlertTitle>What is printIQ?</AlertTitle>
          printIQ is a web based workflow system that integrates business rules and component inputs
          such as labour and materials, to provide real-time quoting to an estimator or online
          client. The data then maps the optimum process path through the factory whilst providing
          full production, scheduling, inventory, outsource, and dispatch data to the relevant
          workflow modules.
          <br />
          <Box className={classes.box}>
            <AlertTitle>TLDR </AlertTitle>
            Download our product guide&nbsp;
            <strong>
              <Link href="#">
                <a>here!</a>
              </Link>
            </strong>
            or book a demo&nbsp;
            <strong>
              <Link href="/book-a-demo">
                <a>here!</a>
              </Link>
            </strong>
          </Box>
        </Alert>

        <Typography variant="body1" component="p" gutterBottom={true}>
          <Box className={classes.listHeader} component="span">
            The printIQ core comprises 8 modules that allow you to run a business from end to end:
          </Box>
          <List className={classes.list}>
            <ListItem>
              The Quote Intelligence module differs from traditional estimating software in that it
              understands the entire production process so it will map out all possible alternatives
              for the job to pass through the factory.
            </ListItem>
            <ListItem>
              The Workflow Manager module is a dynamic tool that is used throughout the application
              to manage every aspect of your business. It is essentially a set of “to do” activities
              with assigned actions, alerts and updates that creates a transparent information
              network throughout the business. All information is centralised and accessible to all
              staff and offers seamless transition of work from one department to the next.
            </ListItem>
            <ListItem>
              The Factory Manager module provides a logical and easy to use communication framework
              for your staff to take control of the production process. Ultimately this ensures your
              staff can manage the production process without reliance on any particular individual,
              instead using a centralised and structured flow for jobs as they move through the
              process lifecycle.
            </ListItem>
            <ListItem>
              The Inventory Manager module is integrated seamlessly with the Quote Intelligence
              module to deliver a feature rich extension to the estimating and job management
              process. The module is fully integrated with the other core printIQ modules so that
              every job is inventory aware. With the Inventory Manager module, we make purchasing,
              invoicing, and reconciliation a seamless and simple process.
            </ListItem>
            <ListItem>
              The Outsource Manager module provides full tendering functionality within printIQ,
              allowing users to obtain a range of prices for all outwork in a simple co-ordinated
              workflow. The module offers the ability to tender each operation within the job, to
              multiple suppliers. The suppliers can enter their prices directly into their own
              automatically generated printIQ supplier portal without any visibility of their
              competitors.
            </ListItem>
            <ListItem>
              The Dispatch Manager comes complete with automated actions such as weight
              verification, multiple split delivery addresses, courier rate integration, and branded
              box labels, so your staff can easily perform the dispatch process saving both time and
              money. By creating the link between all the key aspects of the dispatch environment
              and automating within a common platform.
            </ListItem>
            <ListItem>
              The Job Track Module identifies milestones as the job travels through the quoting,
              production, and dispatch lifecycle, allowing complete tracking throughout the entire
              length of the production cycle. This includes the tracking of the job itself and any
              of the underlying components, through to scheduling and delivery data. We wrap this up
              in a great looking interface that you can share with sales staff and customers.
            </ListItem>
          </List>
        </Typography>
      </Container>
      <Container>
        {isSubmit ? (
          <Box className={classes.box}>
            <ThankYou pageVisited=" for downloading our product guide" />
          </Box>
        ) : (
          <>
            <Alert severity="info">
              <AlertTitle>Download our product guide</AlertTitle>
              Fill in our the form below and download our product guide
            </Alert>

            <Box className={classes.box}>
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
                  company: Yup.string()
                    .max(20, "Must be 20 characters or less")
                    .required("Required"),
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
            </Box>
          </>
        )}
      </Container>
    </>
  );
}

export default TechPage;

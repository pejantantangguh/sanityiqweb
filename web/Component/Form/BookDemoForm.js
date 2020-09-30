import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import TextInput from "./TextInput";
import SelectDropdown from "./SelectDropdown";
import { Button, makeStyles, MenuItem } from "@material-ui/core";
import MyTextField from "./MyTextField";
import MyCheckBox from "./MyCheckBox";

const styles = makeStyles((theme) => ({
  green: {
    background: "rgb(55, 158, 50)",
    background: "linear-gradient(45deg, rgba(55, 158, 50, 1) 0%,rgba(243, 230, 0, 1) 100% )",
    width: "100%",
    textDecoration: "none",
    borderRadius: "10px",
    marginTop: "20px",
  },
}));
function BookDemoForm() {
  const classes = styles();
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          company: "",
          email: "",
          country: "",
          city: "",
          currentMis: "",
          challenge: "",
          requestDemo: false,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().max(15, "Must be 15 characters or less"),
          lastName: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
          email: Yup.string().email("Invalid email addresss`").required("Required"),
          company: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
          country: Yup.string()
            // specify the set of valid values for job type
            // @see http://bit.ly/yup-mixed-oneOf
            .oneOf(["US", "UK", "EU", "AU", "NZ", "Other"], "Invalid Job Type"),
          city: Yup.string().max(20, "Must be 20 characters or less"),
          currentMis: Yup.string().max(20, "Must be 20 characters or less"),
          challenge: Yup.string(),
          requestDemo: Yup.boolean(),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            const response = fetch("https://hooks.zapier.com/hooks/catch/89032/ofb0dcz/", {
              method: "POST",
              body: JSON.stringify(values),
            });
            if (response.status == 200) {
              alert("We will get back to you as soon as possible");
            } else {
              alert("Please email us at letstalk@printiq.com");
            }
            setSubmitting(false);
            resetForm();
          }, 400);
        }}
      >
        <Form>
          <TextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="First name please"
          />
          <TextInput
            label="Last Name*"
            name="lastName"
            type="text"
            placeholder="Last name please"
          />
          <TextInput label="Company*" name="company" type="text" placeholder="Company" />
          <TextInput label="Email*" name="email" type="email" placeholder="email" />
          <SelectDropdown label="Country" name="country">
            <MenuItem value=""> Select a country </MenuItem>
            <MenuItem value="US"> US </MenuItem>
            <MenuItem value="UK"> UK </MenuItem>
            <MenuItem value="EU"> EU </MenuItem>
            <MenuItem value="AU"> AU </MenuItem>
            <MenuItem value="NZ"> NZ </MenuItem>
            <MenuItem value="Other"> Other </MenuItem>
          </SelectDropdown>
          <TextInput label="Current MIS" name="currentMis" placeholder="Current MIS" type="text" />
          <MyTextField
            label="What's your #1 challenge managing workflow?"
            name="challenge"
            placeholder="Your workflow challenge"
            type="text"
          />
          <MyCheckBox checked name="requestDemo" disable="true">
            Demo Required?
          </MyCheckBox>
          <Button className={classes.green} variant="contained" type="submit">
            Submit
          </Button>
        </Form>
      </Formik>
    </>
  );
}

export default BookDemoForm;

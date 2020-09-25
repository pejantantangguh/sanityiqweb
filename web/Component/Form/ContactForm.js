import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

function ContactForm() {
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
          jobType: Yup.string()
            // specify the set of valid values for job type
            // @see http://bit.ly/yup-mixed-oneOf
            .oneOf(["US", "UK", "EU", "AU", "NZ", "Other"], "Invalid Job Type"),
        })}
      ></Formik>
    </>
  );
}

export default ContactForm;

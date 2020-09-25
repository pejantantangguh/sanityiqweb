import { TextField } from "@material-ui/core";
import { useField } from "formik";
import Alert from "@material-ui/lab/Alert";

const MyTextField = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <TextField id={props.id || props.name} label={label} rows={4} defaultValue={...field} {...props} />
      {meta.touched && meta.error ? <Alert severity="warning">{meta.error}</Alert> : null}
    </>
  );
};

export default MyTextField;

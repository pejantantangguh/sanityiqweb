import { FormControl, Input, InputLabel } from "@material-ui/core";
import { useField } from "formik";
import Alert from "@material-ui/lab/Alert";

const TextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <FormControl>
      <InputLabel id={props.id || props.name}>{label}</InputLabel>
      <Input {...field} {...props} />
      {meta.touched && meta.error ? <Alert severity="warning">{meta.error}</Alert> : null}
    </FormControl>
  );
};

export default TextInput;

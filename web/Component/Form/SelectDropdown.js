import { FormControl, InputLabel, Select } from "@material-ui/core";
import { useField } from "formik";

const SelectDropdown = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <FormControl fullWidth="true">
        <InputLabel id={props.id || props.name}> {label}</InputLabel>
        <Select {...field} {...props} />
        {meta.touched && meta.error ? <Alert severity="warning">{meta.error}</Alert> : null}
      </FormControl>
    </>
  );
};
export default SelectDropdown;

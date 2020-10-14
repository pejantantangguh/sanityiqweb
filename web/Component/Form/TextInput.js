import { FormControl, Input, InputLabel, makeStyles } from "@material-ui/core";
import { useField } from "formik";
import Alert from "@material-ui/lab/Alert";

const styles = makeStyles((theme) => ({
	marginTop: {
		marginTop: theme.spacing(2),
	},
}));

const TextInput = ({ label, ...props }) => {
	// useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
	// which we can spread on <input> and alse replace ErrorMessage entirely.
	const [field, meta] = useField(props);
	const classes = styles();
	return (
		<FormControl fullWidth={true} className={classes.marginTop}>
			<InputLabel id={props.id || props.name}>{label}</InputLabel>
			<Input {...field} {...props} />
			{meta.touched && meta.error ? (
				<Alert severity="warning">{meta.error}</Alert>
			) : null}
		</FormControl>
	);
};

export default TextInput;

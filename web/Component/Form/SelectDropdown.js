import { FormControl, InputLabel, Select, makeStyles } from "@material-ui/core";
import { useField } from "formik";

const styles = makeStyles((theme) => ({
	marginTop: {
		marginTop: theme.spacing(2),
	},
}));

const SelectDropdown = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	const classes = styles();
	return (
		<>
			<FormControl fullWidth={true} className={classes.marginTop}>
				<InputLabel id={props.id || props.name}> {label}</InputLabel>
				<Select {...field} {...props} />
				{meta.touched && meta.error ? (
					<Alert severity="warning">{meta.error}</Alert>
				) : null}
			</FormControl>
		</>
	);
};
export default SelectDropdown;

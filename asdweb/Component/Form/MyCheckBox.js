import { Checkbox, makeStyles } from "@material-ui/core";
import { useField } from "formik";
import styled from "styled-components";
import React from "react";

const CheckBoxContainer = styled.div`
	@media only screen and (min-width: 1368px) {
		display: flex;
		margin: 20px auto;
		justify-content: space-between;
	}
`;

const styles = makeStyles((theme) => ({
	checkboxContainer: {
		flex: "1",
		alignSelf: "center",
		background: "#f9f9f9",
		padding: "28px 0",
		border: "1px solid #d3d3d3",
	},
}));

const MyCheckBox = ({ children, ...props }) => {
	const [field, meta] = useField({ ...props, type: "checkbox" });
	const classes = styles();
	return (
		<CheckBoxContainer>
			<div className={classes.checkboxContainer}>
				<label className="checkbox">
					<Checkbox {...field} {...props} />
					{children}
				</label>
			</div>
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</CheckBoxContainer>
	);
};

export default MyCheckBox;

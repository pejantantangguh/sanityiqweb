import { makeStyles, Button, Grid } from "@material-ui/core";
import Link from "next/link";

const styles = makeStyles((theme) => ({
	box: {
		width: "75%",
		margin: "15px auto",
	},
	rainbowText: {
		background:
			"linear-gradient(45deg, rgba(255, 0, 255, 1) 0%,rgba(0, 255, 255, 1) 100%)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		width: "100%",
		fontWeight: 600,
		[theme.breakpoints.up("lg")]: {
			fontSize: "24px",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "20px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "18px",
		},
	},
}));

function ProductGuide() {
	const classes = styles();
	return (
		<Grid container spacing={3} className={classes.box}>
			<Grid item xs={12} sm={6}>
				<Link href="/pdf/whitepaper/PIQ_8pp_Core_Brochure_A4.pdf">
					<a target="_blank">
						<Button variant="contained" className={classes.rainbowText}>
							Product Guide(A4)
						</Button>
					</a>
				</Link>
			</Grid>
			<Grid item xs={12} sm={6}>
				<Link href="/pdf/whitepaper/PIQ_8pp_Core_Brochure_USLetter.pdf">
					<a target="_blank">
						<Button variant="contained" className={classes.rainbowText}>
							Product Guide(Letter)
						</Button>
					</a>
				</Link>
			</Grid>
		</Grid>
	);
}

export default ProductGuide;

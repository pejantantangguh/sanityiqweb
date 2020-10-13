import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	Grid,
	makeStyles,
} from "@material-ui/core";
import react from "react";

let Adam = require("../../public/images/avatar/Adam-Headshot-150x150.jpg");
let Fleming = require("../../public/images/avatar/Adrian-Fleming-150x150.jpg");
let Tailford = require("../../public/images/avatar/Amanda-Tailford-150x150.jpg");
let Daybird = require("../../public/images/avatar/Amy-Daybird-150x150.jpg");
let McGavin = require("../../public/images/avatar/Andrew-McGavin-150x150.jpg");
let McTaggart = require("../../public/images/avatar/Andrew-McTaggart-150x150.jpg");
let Stone = require("../../public/images/avatar/Andrew-Stone-150x150.jpg");
let Lew = require("../../public/images/avatar/Anthony-Lew-150x150.jpg");
let Wakeling = require("../../public/images/avatar/Carl-Wakeling-150x150.jpg");
let Gillson = require("../../public/images/avatar/CherelynGillson-150x150.jpg");
let Mort = require("../../public/images/avatar/Chris-Mort-150x150.jpg");
let Slater = require("../../public/images/avatar/Cody-Slater-150x150.jpg");
let Anderson = require("../../public/images/avatar/Dean-Anderson-150x150.jpg");
let Ng = require("../../public/images/avatar/Herman-Ng-150x150.jpg");
let Varboncoeur = require("../../public/images/avatar/Jacob-Varboncoeur-3-150x150.jpg");
let Broughton = require("../../public/images/avatar/Jamie-Broughton-150x150.jpg");
let Hoops = require("../../public/images/avatar/John-Hoops-150x150.jpg");
let Bowen = require("../../public/images/avatar/Jonathan-Bowen2-150x150.jpg");
let Lawson = require("../../public/images/avatar/Judy-Lawson-150x150.jpg");
let Webber = require("../../public/images/avatar/Justin-Webber-150x150.jpg");
let Ellis = require("../../public/images/avatar/Karl-Ellis-150x150.jpg");
let Grey = require("../../public/images/avatar/Kelly-Grey-New-150x150.jpg");
let Simpson = require("../../public/images/avatar/Kyle-Simpson-1-150x150.jpg");
let Pollard = require("../../public/images/avatar/Linda-Pollard-new-150x150.jpg");
let Moran = require("../../public/images/avatar/Lisa-Moran-1-150x150.jpg");
let McKendrick = require("../../public/images/avatar/Lorne-McKendrick-1-150x150.jpg");
let Luce = require("../../public/images/avatar/Maggie-Luce-150x150.jpg");
let Oconnor = require("../../public/images/avatar/Marc-O’Connor-150x150.jpg");
let Washington = require("../../public/images/avatar/Mark-Washington-150x150.jpg");
let Miloszewski = require("../../public/images/avatar/Matt-Miloszewski-150x150.jpg");
let Rowan = require("../../public/images/avatar/Mick_Rowan-150x150.jpeg");
let PaulNapolitano = require("../../public/images/avatar/Paul-Napolitano-150x150.jpeg");
let Davis = require("../../public/images/avatar/Rachel-Davis-150x150.jpg");
let Yanamandra = require("../../public/images/avatar/Rajiv-Yanamandra-150x150.jpg");
let Kisto = require("../../public/images/avatar/Roy-Kisto-150x150.jpg");
let Jennings = require("../../public/images/avatar/Sean-Jennings-150x150.jpg");
let Fuge = require("../../public/images/avatar/Thomas-Fuge-2-150x150.jpg");
let Napolitano = require("../../public/images/avatar/Tricia-Napolitano-150x150.jpg");
let Valle = require("../../public/images/avatar/Wayne-Valle-150x150.jpg");
let Rawnsley = require("../../public/images/avatar/Zeb-Rawnsley-150x150.jpg");

const director = [
	{
		id: "10",
		name: "Adrian",
		position: "Global Director of Sales",
		imageURL: Fleming,
	},
	{ id: "20", name: "Anthony Lew", position: "CEO", imageURL: Lew },
	{
		id: "30",
		name: "Mick Rowan",
		position: "Director of Product Development & Marketing",
		imageURL: Rowan,
	},
];
const teamMember = [
	{
		id: "40",
		name: "Adam Hexter",
		position: "Product Specialist – Service Delivery Team",
		imageURL: Adam,
	},
	{
		id: "60",
		name: "Amanda Tailford",
		position: "Project Manager",
		imageURL: Tailford,
	},
	{
		id: "70",
		name: "Amy Daybird",
		position: "Product Specialist – Service Delivery Team",
		imageURL: Daybird,
	},
	{
		id: "80",
		name: "Andrew McGavin",
		position: "System Architect – Development Team",
		imageURL: McGavin,
	},
	{
		id: "90",
		name: "Andrew McTaggart",
		position: "Product Specialist – Service Delivery Team",
		imageURL: McTaggart,
	},
	{
		id: "100",
		name: "Andrew Stone",
		position: "Integration Specialist – Support Team",
		imageURL: Stone,
	},
	{
		id: "100",
		name: "Carl Wakeling",
		position: "Development Manager",
		imageURL: Wakeling,
	},
	{
		id: "110",
		name: "Cherelyn Gillson",
		position: "Marketing and Communication Co-ordinator",
		imageURL: Gillson,
	},
	{
		id: "120",
		name: "Chris Mort",
		position: "Technical Build Specialist – Service Delivery Team",
		imageURL: Mort,
	},
	{
		id: "130",
		name: "Cody Slater",
		position: "Full Stack Developer – Development Team",
		imageURL: Slater,
	},
	{
		id: "140",
		name: "Dean Anderson",
		position: "Territory Manager UK and EMEA",
		imageURL: Anderson,
	},
	{
		id: "150",
		name: "Herman Ng",
		position: "Product Specialist – Service Delivery Team",
		imageURL: Ng,
	},
	{
		id: "160",
		name: "Jacob Varboncoeur",
		position: "Product Specialist – Service Delivery Team",
		imageURL: Varboncoeur,
	},
	{
		id: "170",
		name: "Jamie Broughton",
		position: "User Interface Specialist – Development Team",
		imageURL: Broughton,
	},
	{
		id: "180",
		name: "John Hoops",
		position: "Project Manager",
		imageURL: Hoops,
	},
	{
		id: "190",
		name: "Jonathan Bowen",
		position: "Product Specialist – Service Delivery Team",
		imageURL: Bowen,
	},
	{
		id: "200",
		name: "Judy Lawson",
		position: "Accounts Administrator",
		imageURL: Lawson,
	},
	{
		id: "210",
		name: "Justin Webber",
		position: "Sales",
		imageURL: Webber,
	},
	{
		id: "220",
		name: "Karl Ellis",
		position: "Full Stack Developer – Development Team",
		imageURL: Ellis,
	},
	{
		id: "230",
		name: "Kelly Gray",
		position: "Support Team Leader",
		imageURL: Grey,
	},
	{
		id: "240",
		name: "Kyle Simpson",
		position: "Full Stack Developer – Development Team",
		imageURL: Simpson,
	},
	{
		id: "250",
		name: "Linda Pollard",
		position: "Sales",
		imageURL: Pollard,
	},
	{
		id: "260",
		name: "Lisa Moran",
		position: "Sales",
		imageURL: Moran,
	},
	{
		id: "270",
		name: "Lorne McKendrick",
		position: "Product Specialist – Service Delivery Team",
		imageURL: McKendrick,
	},
	{
		id: "280",
		name: "Maggie Luce",
		position: "Product Specialist – Service Delivery Team",
		imageURL: Luce,
	},
	{
		id: "290",
		name: "Marc O’Connor",
		position: "Product Specialist – Service Delivery Team",
		imageURL: Oconnor,
	},
	{
		id: "300",
		name: "Mark Washington",
		position: "Product Specialist – Service Delivery Team",
		imageURL: Washington,
	},
	{
		id: "310",
		name: "Matt Miloszewski",
		position: "Sales",
		imageURL: Miloszewski,
	},
	{
		id: "320",
		name: "Paul Napolitano",
		position: "Product Specialist – Service Delivery Team",
		imageURL: Napolitano,
	},
	{
		id: "330",
		name: "Rachel Davis",
		position: "COO",
		imageURL: Davis,
	},
	{
		id: "340",
		name: "Rajiv Yanamandra",
		position: "Full Stack Developer – Development Team",
		imageURL: Yanamandra,
	},
	{
		id: "350",
		name: "Roy Kisto",
		position: "Product Specialist – Service Delivery Team",
		imageURL: Kisto,
	},
	{
		id: "360",
		name: "Sean Jennings",
		position: "Support Team Leader",
		imageURL: Jennings,
	},
	{
		id: "370",
		name: "Thomas Fuge",
		position: "Full Stack Developer – Development Team",
		imageURL: Fuge,
	},
	{
		id: "380",
		name: "Tricia Napolitano",
		position: "Controller",
		imageURL: Napolitano,
	},
	{
		id: "390",
		name: "Wayne Valle",
		position: "Product Specialist – Service Delivery Team",
		imageURL: Valle,
	},
	{
		id: "400",
		name: "Zeb Rawnsley",
		position: "Full Stack Developer – Development Team",
		imageURL: Rawnsley,
	},
];

const styles = makeStyles((theme) => ({
	centerAlignment: {
		textAlign: "center",
		margin: "20px 0",
	},
}));

function MemberAvatar() {
	const classes = styles();
	return (
		<>
			<Grid container spacing={3} className={classes.centerAlignment}>
				<Grid item xs={12}>
					<Typography variant="h3">The Directors</Typography>
				</Grid>
				{director.map((user, index) => (
					<Grid item xs={12} sm={4} key={index}>
						<Card>
							<img src={user.imageURL} />
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									{user.name}
								</Typography>
								<Typography>{user.position}</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}

				<Grid item xs={12}>
					<Typography variant="h3">The Team</Typography>
				</Grid>
				{teamMember.map((user, index) => (
					<Grid item xs={12} sm={4} key={index}>
						<Card>
							<img src={user.imageURL} />
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									{user.name}
								</Typography>
								<Typography>{user.position}</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</>
	);
}

export default MemberAvatar;

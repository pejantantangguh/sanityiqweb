import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
	IconButton,
	List,
	Divider,
	ListItem,
	ListItemIcon,
	ListItemText,
	SwipeableDrawer,
	Collapse,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import ComputerIcon from "@material-ui/icons/Computer";
import DuoIcon from "@material-ui/icons/Duo";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import DescriptionIcon from "@material-ui/icons/Description";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import InfoIcon from "@material-ui/icons/Info";
import PeopleIcon from "@material-ui/icons/People";

//To Do Active Link when visited page

const useStyles = makeStyles((theme) => ({
	list: {
		width: 250,
	},
	fullList: {
		width: "auto",
	},
	nested: {
		paddingLeft: theme.spacing(9),
	},
}));

function MenuList() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<div>
			<List>
				<ListItem>
					<ListItemIcon>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText>
						<Link href="/">
							<a target="_blank">Home</a>
						</Link>
					</ListItemText>
				</ListItem>
				<ListItem button onClick={handleClick}>
					<ListItemIcon>
						<ComputerIcon />
					</ListItemIcon>
					<ListItemText primary="IQ Software" />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<Link href="/software/iq-core">
							<ListItem button className={classes.nested}>
								<ListItemText>
									<a target="_blank">IQ Core</a>
								</ListItemText>
							</ListItem>
						</Link>
						<Link href="/software/iq-connect">
							<ListItem button className={classes.nested}>
								<ListItemText>
									<a target="_blank">IQ Connect</a>
								</ListItemText>
							</ListItem>
						</Link>
						<Link href="/software/iq-plus">
							<ListItem button className={classes.nested}>
								<ListItemText>
									<a target="_blank">IQ Plus</a>
								</ListItemText>
							</ListItem>
						</Link>
						<Link href="/software/iq-extend">
							<ListItem button className={classes.nested}>
								<ListItemText>
									<a target="_blank">IQ Extend</a>
								</ListItemText>
							</ListItem>
						</Link>
						<Link href="/software/iq-further">
							<ListItem button className={classes.nested}>
								<ListItemText>
									<a target="_blank">IQ Further</a>
								</ListItemText>
							</ListItem>
						</Link>
					</List>
				</Collapse>
				<ListItem>
					<ListItemIcon>
						<ContactMailIcon />
					</ListItemIcon>
					<ListItemText>
						<Link href="/contact-us">
							<a target="_blank">Contact Us</a>
						</Link>
					</ListItemText>
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<DuoIcon />
					</ListItemIcon>
					<ListItemText>
						<Link href="/book-a-demo">
							<a target="_blank">Book a demo</a>
						</Link>
					</ListItemText>
				</ListItem>

				<ListItem>
					<ListItemIcon>
						<DescriptionIcon />
					</ListItemIcon>
					<ListItemText>
						<Link href="/whitepaper">
							<a target="_blank">Whitepaper</a>
						</Link>
					</ListItemText>
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<EmojiObjectsIcon />
					</ListItemIcon>
					<ListItemText>
						<Link href="/tech">
							<a target="_blank">Tech</a>
						</Link>
					</ListItemText>
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<InfoIcon />
					</ListItemIcon>
					<ListItemText>
						<Link href="/about-us">
							<a target="_blank">About Us</a>
						</Link>
					</ListItemText>
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<PeopleIcon />
					</ListItemIcon>
					<ListItemText>
						<Link href="/about-us/who-we-are">
							<a target="_blank">Meet our team</a>
						</Link>
					</ListItemText>
				</ListItem>
			</List>
			<Divider />
		</div>
	);
}

export default MenuList;

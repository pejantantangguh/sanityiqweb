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
              <a>Home</a>
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText>
            <Link href="/contact-usaaaaaaaaa">
              <a>Contact Us</a>
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DuoIcon />
          </ListItemIcon>
          <ListItemText>
            <Link href="/book-a-demo">
              <a>Book a demo</a>
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
            <ListItem button className={classes.nested}>
              <ListItemText>
                <Link href="/software/iq-core">
                  <a>IQ Core</a>
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText>
                <Link href="/software/iq-connect">
                  <a>IQ Connect</a>
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText>
                <Link href="/software/iq-plus">
                  <a>IQ Plus</a>
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText>
                <Link href="/software/iq-extend">
                  <a>IQ Extend</a>
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText>
                <Link href="/software/iq-further">
                  <a>IQ Further</a>
                </Link>
              </ListItemText>
            </ListItem>
          </List>
        </Collapse>
      </List>
      <Divider />
    </div>
  );
}

export default MenuList;

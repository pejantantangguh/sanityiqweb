import Link from "next/link";
import React, { useEffect } from "react";
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
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import MenuList from "./MenuList";

//To Do Active Link when visited page

const useStyles = makeStyles((theme) => ({
  list: {
    width: 500,
  },
  fullList: {
    width: "auto",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function MenuContent() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
  });
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  useEffect(() => {
    toggleDrawer("left", false);
  });

  return (
    <React.Fragment key={"left"}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer("left", true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        className={classes.list}
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        <MenuList />
      </SwipeableDrawer>
    </React.Fragment>
  );
}

export default MenuContent;

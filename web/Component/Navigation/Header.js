import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, Box, Divider } from "@material-ui/core";

import MenuContent from "./Menu";

const HeaderStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 5,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 10px",
    [theme.breakpoints.only("xs")]: {
      width: "8rem",
    },
  },
  responsiveLogo: {
    [theme.breakpoints.only("xs")]: {
      width: "80%",
      marginLeft: "10px",
    },
    [theme.breakpoints.only("md")]: {},
    [theme.breakpoints.only("lg")]: {},
  },
}));

function Header() {
  const classes = HeaderStyles();
  return (
    <AppBar position="sticky" color="transparent">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <MenuContent />
        <Box justifyContent="center">
          <Link href="/">
            <a>
              <img
                src="/logo/printIQ-logo.png"
                alt="printIQ logo"
                className={classes.responsiveLogo}
              />
            </a>
          </Link>
        </Box>
        <Box justifyContent="flex-end">
          <Link href="/book-a-demo">
            <a>
              <Button className={classes.button}>Book a Demo</Button>
            </a>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

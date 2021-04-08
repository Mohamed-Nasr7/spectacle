import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

import FlexContainer from "./FlexContainer";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  rightBox: {
    letterSpacing: "1.5px",
    [theme.breakpoints.up("md")]: {
      width: "140px",
    },
    [theme.breakpoints.down("md")]: {
      width: "130px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "110px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "25px",
    },
  },
  logo: {
    fontFamily: "'Abril Fatface', cursive",
    fontSize: "36px",
    marginLeft: "45px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0",
      fontSize: "30px",
    },
  },
  shop: {
    fontWeight: "bold",
    letterSpacing: "1.5px",
    transition: "all 0.2s ease",
    "&:hover": {
      color: "#afa38e",
    },
  },
}));

function Nav({ toggler, handleScroll }) {
  const classes = useStyles();

  window.addEventListener("scroll", () => {
    if (window.screenTop) {
    }
  });

  return (
    <AppBar className="">
      <FlexContainer>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Link to="/" onClick={handleScroll}>
            <div className={classes.shop}>Shop</div>
          </Link>

          <Link to="/" className={classes.logo}>
            <div>Spectacle</div>
          </Link>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            className={classes.rightBox}
          >
            <Hidden smUp implementation="css">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={toggler}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>

            <NavLinks hidden="xsDown" />
          </Box>
        </Box>
      </FlexContainer>
    </AppBar>
  );
}

export default Nav;

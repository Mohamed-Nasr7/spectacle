import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  rightBox: {
    [theme.breakpoints.up("md")]: {
      width: "110px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "95px",
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
}));

function Nav({ toggler, handleScroll }) {
  const classes = useStyles();

  return (
    <AppBar className="">
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Link to="/" onClick={handleScroll}>
            <div>Shop</div>
          </Link>

          <Link to="/" className={classes.logo}>
            <div>Brumalis</div>
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
      </Container>
    </AppBar>
  );
}

export default Nav;

import React from "react";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  Twitter,
  Instagram,
  Pinterest,
  ArrowForward,
} from "@material-ui/icons";
import FlexContainer from "./FlexContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "150px",
    backgroundColor: "#EDE7DD",
    color: "#000",
    marginTop: "50px",
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    overflow: "hidden",
    padding: "20px 0",
  },
  footerItems: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "7px !important",
      textAlign: "center",
      fontSize: "13px",
    },
  },

  input: {
    width: "73%",
  },
  button: {
    width: "20%",
    maxWidth: "30px",
    minWidth: "36px",
  },

  copyright: {
    textAlign: "end",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    fontSize: "14px",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      padding: "8px !important",
      fontSize: "13px",
      alignItems: "center",
    },
  },
  links: {
    marginLeft: "25px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "15px",
    },
  },
  iconBox: {
    "& *": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
    },
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FlexContainer>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} className={classes.footerItems}>
            <Box>
              <Box marginBottom="4px">991-852-3644</Box>
              <Box marginBottom="4px">help@spectacle.com</Box>
              <Box marginBottom="7px">
                483 Marcelina Skyway, O'Fallon, Missouri
              </Box>
              <Box
                className={classes.iconBox}
                width="80px"
                display="flex"
                justifyContent="space-between"
              >
                <Twitter fontSize="small" />
                <Instagram fontSize="small" />
                <Pinterest fontSize="small" />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} className={classes.copyright}>
            <Box width="300px" marginBottom="14px" fontSize="14px">
              <TextField
                classes={{ root: classes.input }}
                placeholder="Sign up for our newsletter"
              />
              <Button classes={{ root: classes.button }}>
                <ArrowForward fontSize="small" />
              </Button>
            </Box>
            <Box
              display="flex"
              className={classes.box}
              justifyContent="flex-end"
              marginBottom="7px"
            >
              <Link to="/">
                <div>Language</div>
              </Link>
              <Link to="/" className={classes.links}>
                <div>Terms Of Use</div>
              </Link>
              <Link to="/" className={classes.links}>
                <div>Privacy</div>
              </Link>
            </Box>
            <Box display="flex" justifyContent="flex-end">
              &copy;2020 Spectacle. All Rights reserved.
            </Box>
          </Grid>
        </Grid>
      </FlexContainer>
    </div>
  );
}

export default Footer;

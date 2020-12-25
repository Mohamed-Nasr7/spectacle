import React from "react";
import { Link } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "80px",
    backgroundColor: "#0a163b",
    color: "#fff",
    marginTop: "50px",
    display: "flex",
    alignItems: "center",
    fontSize: "13px",
    overflow: "hidden",
  },
  footerItems: {
    [theme.breakpoints.down("xs")]: {
      padding: "7px !important",
    },
  },

  copyright: {
    textAlign: "end",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      padding: "8px !important",
      fontSize: "12px",
    },
  },
  links: {
    marginLeft: "25px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "15px",
    },
  },
  box: {
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} className={classes.footerItems}>
            <Box
              display="flex"
              className={classes.box}
              justifyContent="flex-start"
              fontSize="12px"
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
          </Grid>

          <Grid item xs={12} sm={6} md={8} className={classes.copyright}>
            &copy;2020 Brumalis. All Rights reserved.
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;

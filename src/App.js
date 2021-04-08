import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./store/StateProvider";

import "./App.css";
import Nav from "./components/Nav";
import NavLinks from "./components/NavLinks";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
  breakpoints: {
    values: {
      xs: 440,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: "Open Sans",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "fff",
        },
      },
    },
    MuiContainer: {
      maxWidthSm: {
        paddingLeft: "50px",
        paddingRight: "50px",
      },
      maxWidthMd: {
        paddingLeft: "50px",
        paddingRight: "50px",
      },
      maxWidthLg: {
        paddingLeft: "100px",
        paddingRight: "100px",
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#fff",
        color: "#000",
      },
      root: {
        height: "55px",
        justifyContent: "center",
      },
    },
    MuiPaper: {
      root: {
        color: "#000",
      },
    },
    MuiCardContent: {
      root: {
        padding: "10px",
        paddingBottom: "15px !important",
      },
    },
    MuiInputBase: {
      input: {
        fontSize: "13px",
      },
    },
  },
  color: {
    main: "#000",
    secondary: "rgb(237, 231, 221)",
  },
});

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  drawerPaper: {
    width: 240,
  },
  iconBtn: {
    borderRadius: "0",
  },
  bgColor: {
    backgroundColor: "red",
  },
}));

function App() {
  const [, dispatch] = useStateValue();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [xPosition, setXPosition] = useState();
  const classes = useStyles();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  const homeOffset = (position) => setXPosition(position);

  const handleScroll = () => {
    window.scrollTo({
      top: xPosition - 100,
      behavior: "smooth",
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/checkout">
              <Nav />
              <Checkout />
            </Route>
            <Route path="/login">
              <Nav />
              <Login />
            </Route>
            <Route exact path="/register">
              <Nav />
              <Register />
            </Route>
            <Route exact path="/">
              <Drawer
                variant="temporary" // opens and closes (not permenantely opened)
                anchor="right" //direction where the drawer comes out
                open={mobileOpen} // if true it opens, false is closing
                onClose={handleDrawerToggle} //close it if u clicked on the body
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className={classes.iconBtn}
                >
                  <CloseIcon />
                </IconButton>
                <NavLinks />
              </Drawer>
              <Nav toggler={handleDrawerToggle} handleScroll={handleScroll} />
              <Home homeOffset={homeOffset} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import React, { useLayoutEffect, useRef } from "react";
import Product from "./Product";
import image from "../assets/imgs/home.jpg";
import amazon from "../assets/imgs/amazon echo.jpg";
import ipad from "../assets/imgs/ipad pro.jpg";
import kenwood from "../assets/imgs/kenwood kmix.jpg";
import samsung from "../assets/imgs/samsung lc.jpg";
import samsungWide from "../assets/imgs/samsung lc-wide.jpg";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  background: {
    background: `url(${image}) no-repeat center `,
    backgroundSize: "cover",
    width: "100%",
    height: "54vh",
    marginTop: "45px",
  },
  root: {
    color: theme.color.main,
    marginBottom: "100px",
  },
  title: {
    textShadow: "2px 2px 3px #4a598340",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
  },
  grid: {
    justifyContent: "center",
  },
}));

function Home({ homeOffset }) {
  const classes = useStyles();
  const homeRef = useRef();

  useLayoutEffect(() => {
    homeOffset(homeRef.current.offsetTop);
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.background}></div>
      <Box
        display="flex"
        justifyContent="center"
        mt={12}
        mb={6}
        fontSize={25}
        fontWeight={700}
        className={classes.title}
        ref={homeRef}
      >
        BEST SELLERS
      </Box>
      <Container maxWidth="lg">
        <Grid container spacing={4} className={classes.grid}>
          <Grid item xs={12} sm={6} md={6}>
            <Product
              id="3254354345"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image={ipad}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Product
              id="49538094"
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={239.0}
              rating={4}
              image={kenwood}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Product
              id="4903850"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              price={199.99}
              rating={3}
              image={samsung}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Product
              id="23445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              image={amazon}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Product
              id="90829332"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              price={1094.98}
              rating={4}
              image={samsungWide}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;

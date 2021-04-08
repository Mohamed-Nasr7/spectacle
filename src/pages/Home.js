import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";

import Product from "../components/Product";
import FlexContainer from "../components/FlexContainer";
import Carousel from "../components/Carousel";
import SectionTitle from "../components/SectionTitle";
import Offers from "../components/Offers";
import home from "../assets/imgs/home.jpg";
import BestSellers from "../model/BestSellers";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.color.main,
    marginBottom: "100px",
  },
  background: {
    background: `url(${home}) no-repeat center `,
    backgroundSize: "cover",
    width: "100%",
    height: "88vh",
    position: "relative",
  },
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  bannerText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    textAlign: "center",

    "& p": {
      fontSize: "28px",
      fontWeight: "bold",
    },
    "& a": {
      display: "block",
      width: "200px",
      margin: "0 auto",
    },
    "& button": {
      color: "#fff",
      borderColor: "#fff",
      marginTop: "30px",
      width: "100%",
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
      <div className={classes.background}>
        <div className={classes.overlay}></div>
        <div className={classes.bannerText}>
          <p>Sign up for your favorite Luggage</p>
          <Link>
            <Button variant="outlined">Sign up</Button>
          </Link>
        </div>
      </div>

      <div ref={homeRef}>
        <SectionTitle>Best Sellers</SectionTitle>
      </div>
      <FlexContainer>
        <Grid container spacing={4} className={classes.grid}>
          {BestSellers.map((item, index) => (
            <Grid id={item.id} item xs={12} sm={6} md={index < 2 ? 6 : 4}>
              <Product
                id={item.id}
                title={item.title}
                price={item.price}
                rating={parseInt(item.rate)}
                image={item.image}
              />
            </Grid>
          ))}
        </Grid>
      </FlexContainer>
      <Carousel />
      <Offers />
    </div>
  );
}

export default Home;

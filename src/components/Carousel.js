import React from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import SectionTitle from "./SectionTitle";
import NewArrivals from "../model/NewArrivals";
import Product from "./Product";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "300px",
    marginTop: "50px",
    padding: "5px 50px 110px",
    backgroundColor: "rgb(237, 231, 221)",
    [theme.breakpoints.down("xs")]: {
      padding: "5px 20px 110px",
    },
  },
}));

export default function Carousel() {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={classes.root}>
      <SectionTitle>New Arrivals</SectionTitle>
      <Slider {...settings}>
        {NewArrivals.map((item, index) => (
          <Box>
            <Product
              id={item.id}
              title={item.title}
              price={item.price}
              rating={parseInt(item.rate)}
              image={item.image}
            />
          </Box>
        ))}
      </Slider>
    </div>
  );
}

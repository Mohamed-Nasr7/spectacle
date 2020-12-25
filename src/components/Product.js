import React from "react";
import Star from "@material-ui/icons/Star";
import { useStateValue } from "../StateProvider";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: "center",
    padding: "15px",
    margin: "0 auto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    border: "1px solid #b3b3b3a3",
    boxShadow:
      "0 2.3px 3px rgba(0, 0, 0, 0.024), 0 4.2px 8.3px rgba(0, 0, 0, 0.035), 0 6.1px 19.9px rgba(0, 0, 0, 0.046),0 14px 66px rgba(0, 0, 0, 0.07)",

    "&:hover": {
      boxShadow:
        "0 2.3px 3px rgba(0, 0, 0, 0.038), 0 5px 8.3px rgba(0, 0, 0, 0.055), 0 10.5px 19.9px rgba(0, 0, 0, 0.072), 0 24px 66px rgba(0, 0, 0, 0.11)",
    },
  },
  cardImg: {
    maxHeight: "200px",
    margin: "5px 0 10px",
  },
  img: {
    display: "block",
    maxHeight: "200px",
    objectFit: "contain",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      maxHeight: "145px",
    },
  },
  star: {
    color: "#ffcc00",
  },
  productTitle: {
    [theme.breakpoints.up("lg")]: {
      fontSize: "17.5px",
    },
  },
  price: {
    margin: "7px 0",
    [theme.breakpoints.up("lg")]: {
      fontSize: "17.5px",
    },
  },
  button: {
    [theme.breakpoints.down("md")]: {
      width: "112px",
      fontSize: "0.75rem",
      padding: "6px 10px",
    },
  },
}));

function Product({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();
  const classes = useStyles();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <p className={classes.productTitle}>{title}</p>
        <p className={classes.price}>
          <strong>${price}</strong>
        </p>
        <div>
          {Array(rating)
            .fill()
            .map((val, i) => (
              <Star key={i} className={classes.star} />
            ))}
        </div>
      </CardContent>
      <CardMedia className={classes.cardImg}>
        <img src={image} alt="img" className={classes.img} />
      </CardMedia>
      <CardContent>
        <Button
          variant="contained"
          color="primary"
          onClick={addToBasket}
          className={classes.button}
        >
          Add to basket
        </Button>
      </CardContent>
    </Card>
  );
}

export default Product;

import React from "react";
import Star from "@material-ui/icons/Star";
import { useStateValue } from "../store/StateProvider";

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
    height: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "none",
    border: "1px solid rgba(0,0,0,0.1)",
    fontSize: "1rem",
    /* "&:hover": {
      boxShadow:
        "0 2.3px 3px rgba(0, 0, 0, 0.038), 0 5px 8.3px rgba(0, 0, 0, 0.055), 0 10.5px 19.9px rgba(0, 0, 0, 0.072), 0 24px 66px rgba(0, 0, 0, 0.11)",
    }, */
    [theme.breakpoints.down("md")]: {
      height: "430px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "450px",
      margin: "0 5%",
    },
  },
  cardImg: {
    height: "270px",
    display: "flex",
    alignItems: "center",
  },
  img: {
    display: "block",
    maxHeight: "155px",
    objectFit: "contain",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "150px",
    },
  },
  star: {
    color: "#ffcc00",
  },
  productTitle: {
    /* [theme.breakpoints.up("lg")]: {
      fontSize: "17px",
    }, */
  },
  price: {
    margin: "7px 0",
    /* [theme.breakpoints.up("lg")]: {
      fontSize: "17.5px",
    }, */
  },
  button: {
    fontSize: "12px",
    color: "#000",
    backgroundColor: theme.color.secondary,
    fontWeight: "bold",
    marginTop: "10px",
    [theme.breakpoints.down("md")]: {
      width: "117px",
      fontSize: "0.75rem",
      padding: "6px 10px",
    },
    "&:hover": {
      backgroundColor: "#afa38e70",
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
      <CardMedia className={classes.cardImg}>
        <img src={image} alt="img" className={classes.img} />
      </CardMedia>

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

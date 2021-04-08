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
    padding: "15px",
    margin: "0 auto 15px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardImg: {
    maxHeight: "200px",
    margin: "5px 0 10px",
  },
  img: {
    display: "block",
    maxHeight: "200px",
    objectFit: "contain",
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
    marginTop: "15px",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.75rem",
      padding: "6px 10px",
    },
  },
}));

function CheckoutProduct({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();
  const classes = useStyles();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };
  return (
    <div className="checkoutProduct">
      <Card className={classes.card}>
        <CardMedia className={classes.cardImg}>
          <img src={image} alt="img" className={classes.img} />
        </CardMedia>
        <CardContent>
          <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className={classes.price}>
              <strong>${price}</strong>
            </p>
            <div className={classes.star}>
              {Array(rating)
                .fill()
                .map((val, i) => (
                  <Star key={i} />
                ))}
            </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={removeFromBasket}
            className={classes.button}
          >
            Remove from basket
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default CheckoutProduct;

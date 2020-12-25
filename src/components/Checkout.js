import React from "react";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "90px",
    minHeight: "calc(100vh - 204px)",
    color: theme.color.main,
    [theme.breakpoints.up("lg")]: {
      fontSize: "17px",
    },
  },
  title: {
    borderBottom: "1px solid",
    paddingBottom: "8px",
    marginBottom: "25px",
    fontSize: "23px",
  },
  subtotal: {
    minHeight: "150px",
    padding: "15px",
    backgroundColor: "#eee",
  },
}));

function Checkout() {
  const [{ basket }] = useStateValue(); //we don't need dispatch here
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8} md={9}>
            {basket?.length === 0 ? (
              <div>
                <h2 className={classes.title}>Your shopping cart is empty</h2>
                <p>
                  You have no items in the basket. Yo buy one or more items
                  click "add to basket" next to the item.{" "}
                </p>
              </div>
            ) : (
              <div>
                <h2 className={classes.title}> Your shopping basket</h2>
                {basket?.map((item) => (
                  <CheckoutProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
              </div>
            )}
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            {basket.length > 0 && (
              <div className={classes.subtotal}>
                <h2>Subtotal</h2>
                <Subtotal />
              </div>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Checkout;

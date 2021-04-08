import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../store/StateProvider";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.down("md")]: {
      fontSize: "0.75rem",
      padding: "6px 10px",
    },
  },
  items: {
    margin: "15px 0",
  },
}));

function Subtotal() {
  const [{ basket }] = useStateValue();
  const classes = useStyles();

  const getBasketTotal = (basket) => {
    let total = basket?.reduce((accumulator, item) => {
      return accumulator + item.price;
    }, 0);

    return total;
  };

  return (
    <div>
      <CurrencyFormat
        renderText={(value) => (
          <p className={classes.items}>
            Subtotal ({basket.length} items: <strong>{`${value}`}</strong>)
          </p>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Button className={classes.button} variant="contained" color="primary">
        Proceed to checkout
      </Button>
    </div>
  );
}

export default Subtotal;

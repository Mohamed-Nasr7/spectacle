import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FlexContainer from "./FlexContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#000",
    marginTop: "120px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "40px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      justifyItems: "center",
    },
  },
  title: {
    fontSize: "28px",
    marginBottom: "25px",
  },
  section: {
    fontSize: "16px",
    lineHeight: "1.5em",
  },
  item: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
}));

function Offers() {
  const classes = useStyles();

  return (
    <FlexContainer>
      <div className={classes.root}>
        <div className={classes.item}>
          <h2 className={classes.title}>Free Shipping</h2>
          <p className={classes.section}>
            Free shipping on all Weekend Boot orders in North America
          </p>
        </div>

        <div className={classes.item}>
          <h2 className={classes.title}>Pay in 4 Easy Installments</h2>
          <p className={classes.section}>
            Choose what you want at checkout to pay in 4 interest-free
            installments.
          </p>
        </div>

        <div className={classes.item}>
          <h2 className={classes.title}>Free Returns & Exchanges</h2>
          <p className={classes.section}>
            Give them a try, you've got 14 days!
          </p>
        </div>
      </div>
    </FlexContainer>
  );
}

export default Offers;

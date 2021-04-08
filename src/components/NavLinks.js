import React from "react";
import { useStateValue } from "../store/StateProvider";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import MenuWrapper from "./MenuWrapper";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  linkHover: {
    transition: "all 0.2s ease",
    "&:hover": {
      color: "#afa38e",
    },
  },
}));

function NavLinks({ hidden }) {
  const [{ basket, user }] = useStateValue();
  const classes = useStyles();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent={hidden ? "space-between" : "space-evenly"}
      alignItems={hidden ? "space-between" : "center"}
      flexDirection={hidden ? "row" : "column"}
      height={hidden ? "initial" : "100px"}
      fontWeight="bold"
    >
      <MenuWrapper hidden={hidden}>
        <Link to="/checkout" className={classes.linkHover}>
          <div>
            <ShoppingBasketIcon />
            <span>{basket?.length}</span>
          </div>
        </Link>
        <Link to={!user && "/login"} className={classes.linkHover}>
          <div onClick={handleAuth}>{user ? "Log out" : "Log in"}</div>
        </Link>
      </MenuWrapper>
    </Box>
  );
}

export default NavLinks;

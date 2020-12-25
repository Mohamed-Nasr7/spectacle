import React from "react";
import Hidden from "@material-ui/core/Hidden";

function MenuWrapper({ children, hidden }) {
  return hidden === "xsDown" ? (
    <Hidden xsDown>{children}</Hidden>
  ) : (
    <>{children}</>
  );
}

export default MenuWrapper;

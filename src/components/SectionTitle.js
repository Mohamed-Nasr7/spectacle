import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  title: {
    textShadow: "2px 2px 3px #4a598340",
    [theme.breakpoints.down("md")]: {
      fontSize: "22px",
    },
  },
}));

function SectionTitle({ children }) {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      justifyContent="center"
      mt={8}
      mb={6}
      fontSize={27}
      fontWeight={700}
      className={classes.title}
    >
      {children}
    </Box>
  );
}

export default SectionTitle;

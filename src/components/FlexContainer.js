import React, { useState } from "react";
import Container from "@material-ui/core/Container";

function FlexContainer({ children }) {
  const [width, setwidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setwidth(window.innerWidth));

  return (
    <Container maxWidth={`${width > 965 ? "lg" : "xl"}`}>{children}</Container>
  );
}

export default FlexContainer;

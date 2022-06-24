import React from "react";
import PropTypes from "prop-types";
import { Container } from "./style";

Stack.propTypes = {
  spacing: PropTypes.number,
  wrap: PropTypes.bool,
  direction: PropTypes.oneOf(["row", "column"]),
};

export default function Stack(props) {
  const { children, spacing = 2, direction = "row", wrap = false } = props;
  return (
    <Container spacing={spacing} direction={direction} wrap={wrap}>
      {children}
    </Container>
  );
}

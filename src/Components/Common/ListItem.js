import React from "react";
import styled from "@emotion/styled";

const ListStyleItem = styled("li")(({ theme }) => ({
  marginRight: "30px",
  fontFamily: "sans-serif",
  letterSpacing: "0.2em",
  color: "white",
}));

const ListItem = ({ children, ...Props }) => {
  return <ListStyleItem {...Props}>{children}</ListStyleItem>;
};
ListItem.defaultProps = {
  children: <>no children found</>,
};
export { ListItem };

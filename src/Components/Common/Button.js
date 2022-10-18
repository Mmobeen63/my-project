import * as React from "react";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

const StyledButton = styled(Button)(({ theme }) => ({
  alignSelf: "center",
  borderRadius: "10px",
  padding: "10px",
  marginTop: "15px",
}));
const ButtonCom = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export { ButtonCom };

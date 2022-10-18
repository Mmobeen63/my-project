import React, { useContext, useState } from "react";
import { Box } from "@mui/material";
import { Typography } from "../../Components/Common/Typography";
import AuthContext from "../../Context/AuthProvider";
import { authData } from "../../api/userData";
import styled from "@emotion/styled";
import { StackComp } from "../Common/Stack";
import { LOGIN_CONTENT } from "../../Config/Constants";
import { TextFieldCom } from "../Common/TextField";
import { ButtonCom } from "../Common/Button";

const StyledLoginContainer = styled(StackComp)(({ theme }) => ({
  padding: "50px",
  alignItems: "center",
}));

const StyledInputFields = styled(StackComp)(({ theme }) => ({
  marginTop: "50px",
}));

export const Signin = () => {
  const loginStatus = useContext(AuthContext);
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const authenticate = (payload) => {
    console.log("after auth");
    const userData = payload;
    if (
      userData.userName === authData.userName &&
      userData.password === authData.password
    ) {
      loginStatus.updateLogin();
      return true;
    } else {
      alert("Username or Password incorrect");
      throw Error("Incorrent username or password");
    }
  };
  return (
    <StyledLoginContainer>
      <Typography variant="h2" color="primary">
        {capitalizeFirstLetter(LOGIN_CONTENT)}
      </Typography>
      <Box
        sx={{
          "& .MuiTextField-root": { m: 2, width: "75ch" },
        }}
        component="form"
      >
        <StyledInputFields>
          <TextFieldCom
            required
            onChange={handleChange}
            name="userName"
            variant="standard"
            label="Enter Username"
            value={loginData.userName}
          ></TextFieldCom>
          <TextFieldCom
            variant="standard"
            label="Enter Password"
            value={loginData.password}
            name="password"
            onChange={handleChange}
            required
          ></TextFieldCom>
          <ButtonCom
            sx={{
              color: "white",
              width: "50%",
            }}
            variant="contained"
            onClick={() => {
              console.log("before auth");
              authenticate(loginData);
            }}
          >
            {LOGIN_CONTENT.toUpperCase()}
          </ButtonCom>
        </StyledInputFields>
      </Box>
    </StyledLoginContainer>
  );
};

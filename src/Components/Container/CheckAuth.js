import { Navigate, Outlet } from "react-router-dom";
import React, { useContext } from "react";
import AuthContext from "../../Context/AuthProvider";

export const CheckAuth = () => {
  const loginStatus = useContext(AuthContext);

  return loginStatus.user.Login ? (
    <Outlet />
  ) : (
    <Navigate to="signin" replace={true} />
  );
};

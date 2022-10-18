import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import useAuth from "../../Hooks/useAuth";

const CheckLogin = () => {
  const { handleContext } = useAuth();
  const loginStatus = handleContext();
  return loginStatus.user.Login === false ? (
    <Outlet />
  ) : (
    <Navigate to="/jobs" replace={true} />
  );
};
export default CheckLogin;

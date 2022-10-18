import React from "react";
import { Routes, Route } from "react-router-dom";
import CheckLogin from "../Components/Container/CheckLogin";
import { CheckAuth } from "../Components/Container/CheckAuth";
import { HomePage } from "../Components/Container/HomePage";
import { Jobs } from "../Components/Container/Jobs";
import { Signin } from "../Components/Container/Signin";
import { Users } from "../Components/Container/Users";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<CheckLogin />}>
        <Route path="/signin" element={<Signin />} />
      </Route>
      <Route element={<CheckAuth />}>
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/users" element={<Users />} />
      </Route>
    </Routes>
  );
};

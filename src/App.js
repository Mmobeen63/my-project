import React from "react";
import { Router } from "./Routing/Router.js";
import { NavBar } from ".././src/Components/Common/NavBar";
import "./App.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <Router />
    </div>
  );
};

export default App;

import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "Screens/Home";

const Router = () => {
  return (
    <HashRouter>
      <Route path="/" exact component={Home} />
    </HashRouter>
  );
};

export default Router;

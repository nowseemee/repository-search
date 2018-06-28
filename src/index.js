import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Discovery from "./pages/Discovery";
import Contributors from "./pages/Contributors";
import AppBar from "./components/AppBar";

ReactDOM.render(
  <BrowserRouter>
    <div style={{ margin: "12px" }}>
      <AppBar />
      <Route exact path="/" component={Discovery} />
      <Route path="/search/:q?" component={Discovery} />
      <Route path="/contributors/:user/:repo" component={Contributors} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

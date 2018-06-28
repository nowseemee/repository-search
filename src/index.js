import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Discovery from "./pages/Discovery";

const Contributors = () => <h1>Contributors</h1>;

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/:q?" component={Discovery} />
      <Route path="/contributors" component={Contributors} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

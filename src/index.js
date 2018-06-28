import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Discovery from "./pages/Discovery";

const Contributors = () => <h1>Contributors</h1>;
import AppBar from "./components/AppBar";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <AppBar />

      <Route exact path="/" component={Discovery} />
      <Route path="/search/:q?" component={Discovery} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

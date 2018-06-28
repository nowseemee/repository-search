import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

const Search = () => <h1>Search</h1>;
const Contributors = () => <h1>Contributors</h1>;

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Search} />
      <Route path="/contributors" component={Contributors} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

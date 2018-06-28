import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export default () => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Link style={{ color: "black", textDecoration: "none" }} to={"/"}>
        <Typography variant="title">Code Discovery</Typography>
      </Link>
    </Toolbar>
  </AppBar>
);

import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>Welcome to your Dashboard</Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Header;

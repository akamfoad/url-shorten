import React from "react";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
const layout = props => {
  return (
    <>
      <Toolbar />
      {/* TODO <SideDrawer /> */}
      <main className={classes.MainContent}>{props.children}</main>
    </>
  );
};

export default layout;

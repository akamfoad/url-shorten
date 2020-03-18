import React from "react";
import classes from "./SideDrawer.module.css";
import Navbar from "../Navbar/Navbar";
import Auth from "../Auth/Auth";
const Sidedrawer = props => {
  const sideDrawerClasses = [classes.SideDrawer];
  if (props.shown) {
    sideDrawerClasses.push(classes.Shown);
  }

  return (
    <div className={sideDrawerClasses.join(" ")} onClick={props.toggle}>
      <Navbar isMobile={true} />
      <hr />
      <Auth isMobile={true} />
    </div>
  );
};

export default Sidedrawer;

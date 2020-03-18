import React from "react";
import NavbarItem from "./NavbarItem/NavbarItem";
import classes from "./Navbar.module.css";
const navbar = props => {
  const navListClasses = [classes.NavList];
  if (props.isMobile) {
    navListClasses.push(classes.Mobile);
  }
  return (
    <nav className={classes.Navbar}>
      <ul className={navListClasses.join(" ")}>
        <NavbarItem link="#" text="Features" />
        <NavbarItem link="#" text="Pricing" />
        <NavbarItem link="#" text="Resources" />
      </ul>
    </nav>
  );
};

export default navbar;

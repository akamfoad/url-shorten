import React from "react";
import NavbarItem from "../Navbar/NavbarItem/NavbarItem";
import classes from "./Auth.module.css";
const Auth = props => {
  const authNavClasses = [classes.AuthNav];
  const signUpClasses = [classes.AuthItem, classes.Auth_Signup];
  const loginClasses = [classes.AuthItem, classes.Auth_Login];
  if (props.isMobile) {
    authNavClasses.push(classes.Mobile);
    signUpClasses.push(classes.Mobile);
    loginClasses.push(classes.Mobile);
  }
  return (
    <ul className={authNavClasses.join(" ")}>
      <NavbarItem classes={loginClasses} text="Login" link="#" />
      <NavbarItem classes={signUpClasses} text="Sign Up" link="#" />
    </ul>
  );
};

export default Auth;

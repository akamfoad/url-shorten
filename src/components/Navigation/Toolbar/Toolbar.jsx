import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Auth from "../Auth/Auth";
import SideDrawer from "../SideDrawer/SideDrawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import classes from "./Toolbar.module.css";
const mobileQuery = window.matchMedia("(max-width: 679px)");
const Toolbar = () => {
  const [isBarActive, setIsBarActive] = useState(false);
  const [isMobile, setIsMobile] = useState(mobileQuery.matches);
  const mediaHandler = e => setIsMobile(e.matches);
  useEffect(() => {
    mobileQuery.addListener(mediaHandler);
    return () => {
      mobileQuery.removeListener(mediaHandler);
    };
  }, []);
  const toggleSideDrawer = () => {
    setIsBarActive(!isBarActive);
  };
  return (
    <header className={classes.Toolbar}>
      <div className={classes.Logo} />
      {isMobile ? (
        <>
          <FontAwesomeIcon
            onClick={toggleSideDrawer}
            className={classes.Toggle}
            icon={isBarActive ? faTimes : faBars}
          />
          <SideDrawer toggle={toggleSideDrawer} shown={isBarActive} />
        </>
      ) : (
        <>
          <Navbar />
          <Auth />
        </>
      )}
    </header>
  );
};
export default Toolbar;

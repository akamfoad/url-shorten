import React from "react";
import classes from "./Boost.module.css";
import landing_classes from "../Landing/Landing.module.css";
const Boost = () => {
  return (
    <section className={classes.Boost}>
      <h1>Boost your links today</h1>
      <button
        style={{ padding: "5px 1.5rem" }}
        className={landing_classes.Get_Started}
      >
        Get Started
      </button>
    </section>
  );
};

export default Boost;

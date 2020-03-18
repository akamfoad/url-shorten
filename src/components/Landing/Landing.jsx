import React from "react";
import classes from "./Landing.module.css";
import illustration_working from "../../assets/images/illustration-working.svg";
const landing = () => (
  <section className={classes.Landing}>
    <div className={classes.Content}>
      <article>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
      </article>
      <button className={classes.Get_Started}>Get Started</button>
    </div>

    <img
      className={classes.Working_Image}
      src={illustration_working}
      alt="illustration working"
    />
  </section>
);

export default landing;

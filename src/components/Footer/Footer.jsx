import React from "react";
import classes from "./Footer.module.css";

const footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.Logo} />
      <div className={classes.Links}>
        <div className={classes.GENERAL_LINKS}>
          <section>
            <h4>Features</h4>
            <ul>
              <li>
                <a href="/">Link Shortening</a>
              </li>
              <li>
                <a href="/">Branded Links</a>
              </li>
              <li>
                <a href="/">Analytics</a>
              </li>
            </ul>
          </section>
          <section>
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Developers</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
            </ul>
          </section>
          <section>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Our team</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </section>
        </div>
        <div className={classes.Social_Links}>
          <a
            href="https://www.facebook.com/akam.foad"
            target="_blank"
            rel="noreferrer"
            className={classes.Facebook_Icon}
          > </a>
          <a
            href="https://twitter.com/AkamFoad"
            target="_blank"
            rel="noreferrer"
            className={classes.Twitter_Icon}
          > </a>
          <a
            href="https://www.pinterest.com"
            target="_blank"
            rel="noreferrer"
            alt="I don't have Pinterest 😁"
            className={classes.Pinterest_Icon}
          > </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            alt="I don't have Instagram 😁"
            className={classes.Instagram_Icon}
           > </a>
        </div>
      </div>
    </footer>
  );
};

export default footer;

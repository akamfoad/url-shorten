import React from "react";
import classes from "./Statistic.module.css";
import BRAND_RECOGNITION_AVATAR from "../../assets/images/icon-brand-recognition.svg";
import DETAILED_RECORDS_AVATAR from "../../assets/images/icon-detailed-records.svg";
import FULLY_CUSTOMIZABLE_AVATAR from "../../assets/images/icon-fully-customizable.svg";
import Shortener from "../Shortener/Shortener";
import ShortenedHistory from "../ShortenedHistory/ShortenedHistory";
const statistic = () => {
  return (
    <div className={classes.Statistic}>
      <Shortener />
      <ShortenedHistory />
      <section className={classes.Title_Section}>
        <h1>Advanced Statistic</h1>
        <p>
          Track how your links performing accross the web with our advanced
          statistics dashboard
        </p>
      </section>
      <div className={classes.Cards}>
        <div className={classes.Belt} />
        <section
          className={[classes.Card, classes.Brand_Recognition].join(" ")}
        >
          <div className={classes.Avatar}>
            <img src={BRAND_RECOGNITION_AVATAR} alt="AVATART" />
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Genric links don't
            mean a thing. Branded links help instil confident in your content.
          </p>
        </section>
        <section className={[classes.Card, classes.Detailed_Records].join(" ")}>
          <div className={classes.Avatar}>
            <img src={DETAILED_RECORDS_AVATAR} alt="AVATART" />
          </div>
          <h3>Detailed Records</h3>
          <p>
            Grain insights into who is clicking your links. Knowing when and
            where people engage with your content hekos inform better decisions.
          </p>
        </section>
        <section
          className={[classes.Card, classes.Fully_Customizable].join(" ")}
        >
          <div className={classes.Avatar}>
            <img src={FULLY_CUSTOMIZABLE_AVATAR} alt="AVATART" />
          </div>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoveability through
            customizable links, supercharging audience engagement.
          </p>
        </section>
      </div>
    </div>
  );
};

export default statistic;

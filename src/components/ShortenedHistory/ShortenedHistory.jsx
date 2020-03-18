import React from "react";
import classes from "./ShortenedHistory.module.css";
import Shortened from "./Shortened/Shortened";
import { connect } from "react-redux";
const ShortenedHistory = props => {
  const sortByDateASC = (a, b) => {
    return a.created_at > b.created_at ? -1 : 1;
  };
  return (
    <div className={classes.ShortenedHistory}>
      {props.shortened_history
        ? [...props.shortened_history]
            .sort(sortByDateASC)
            .map(el => (
              <Shortened
                key={el.hashid}
                original_link={el.url}
                shortened_link={"https://rel.ink/" + el.hashid}
              />
            ))
        : null}
    </div>
  );
};

const mapStateToProps = state => ({
  shortened_history: state.shortened_history
});

export default connect(mapStateToProps)(ShortenedHistory);

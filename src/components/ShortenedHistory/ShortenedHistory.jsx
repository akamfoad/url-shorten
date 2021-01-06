import React from "react";
import classes from "./ShortenedHistory.module.css";
import Shortened from "./Shortened/Shortened";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const ShortenedHistory = (props) => {
  const sortByDateASC = (a, b) => {
    return Date.parse(a.created_at) > Date.parse(b.created_at) ? -1 : 1;
  };
  return (
    <div className={classes.ShortenedHistory}>
      {props.shortened_history
        ? [...props.shortened_history]
            .sort(sortByDateASC)
            .map(({ id, link, long_url }) => (
              <Shortened
                key={id}
                original_link={long_url}
                shortened_link={link}
              />
            ))
        : null}
    </div>
  );
};

ShortenedHistory.propTypes = {
  shortened_history: PropTypes.arrayOf(
    PropTypes.shape({
      created_at: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      custom_bitlinks: PropTypes.arrayOf(PropTypes.string),
      long_url: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string),
      deeplinks: PropTypes.arrayOf(
        PropTypes.shape({
          guid: PropTypes.string,
          bitlink: PropTypes.string,
          app_uri_path: PropTypes.string,
          install_url: PropTypes.string,
          app_guid: PropTypes.string,
          os: PropTypes.string,
          install_type: PropTypes.string,
          created: PropTypes.string,
          modified: PropTypes.string,
          brand_guid: PropTypes.string,
        })
      ),
      references: PropTypes.shape({ group: PropTypes.string }),
    })
  ),
};

const mapStateToProps = (state) => ({
  shortened_history: state.shortened_history,
});

export default connect(mapStateToProps)(ShortenedHistory);

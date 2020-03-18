import React, { useState, useRef } from "react";
import classes from "./Shortener.module.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
const Shortener = props => {
  const emailRef = useRef(null);
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [showerror, setShowerror] = useState(null);
  const submitHandler = e => {
    e.preventDefault();
    if (url.length > 0) {
      props.onShortenData(url);
    } else {
      emailRef.current.focus();
    }
  };

  const changeHandler = e => {
    setError(e.target.validationMessage);
    setUrl(e.target.value);
    if (e.target.isValid) {
      setShowerror(null);
    } else {
      setShowerror(classes.Shown);
    }
  };

  const invalidHandler = e => {
    setError(e.target.validationMessage);
  };
  return (
    <div className={classes.Shortener}>
      <form className={classes.Form} onSubmit={submitHandler}>
        <input
          id="URL"
          type="url"
          ref={emailRef}
          value={url}
          onInvalid={invalidHandler}
          onChange={changeHandler}
          placeholder="shorten a link here..."
        />
        <div className={[classes.input_error, showerror].join(" ")}>
          {error}
        </div>
        <button disabled={props.shortenLoading} id="shorten_it" type="submit">
          {props.shortenLoading ? "Shortening..." : "Shorten it!"}
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  shortenLoading: state.shortenLoading
});
const mapDispatchToProps = dispatch => ({
  onShortenData: url => dispatch(actions.shorten(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Shortener);

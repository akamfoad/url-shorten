import React, { useState, useRef } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import classes from "./Shortened.module.css";

const Shortened = props => {
  const [isCopied, setIsCopied] = useState(false);
  const buttonRef = useRef(null);
  return (
    <div className={classes.Shortened}>
      <div className={classes.Links}>
        <a href={props.original_link} className={classes.OriginalLink}>
          {props.original_link}
        </a>
        <div className={classes.RULE} />
        <a href={props.shortened_link} className={classes.ShortenedLink}>
          {props.shortened_link}
        </a>
      </div>
      <CopyToClipboard
        text={props.shortened_link}
        onCopy={() => {
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
            buttonRef.current.blur();
          }, 1500);
        }}
      >
        <button ref={buttonRef}>{isCopied ? "Copied!" : "Copy"}</button>
      </CopyToClipboard>
    </div>
  );
};

export default Shortened;

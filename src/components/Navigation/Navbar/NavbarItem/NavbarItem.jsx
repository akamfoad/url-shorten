import React from "react";

const navbarItem = props => {
  return (
    <li className={props.classes ? props.classes.join(" ") : null}>
      <a style={{ textDecoration: "none" }} href={props.link}>
        {props.text}
      </a>
    </li>
  );
};

export default navbarItem;

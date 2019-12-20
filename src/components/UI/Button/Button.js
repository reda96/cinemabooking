import React from "react";
import classes from "./Button.css";
const button = props => (
  <button
    style={props.style}
    className={[classes.Button, classes[props.btnType], props.classes].join(
      " "
    )}
    onClick={props.clicked}
    disabled={props.disabled}
  >
    {props.children}
  </button>
);
export default button;

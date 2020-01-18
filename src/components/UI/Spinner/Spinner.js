import React from "react";
import classes from "./Spinner.css";

const spinner = props => (
  <div
    className={classes.Loader}
    style={{ height: props.height, width: props.width }}
  >
    Loading...
  </div>
);
export default spinner;

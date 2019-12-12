import React from "react";
import classes from "./seatsRow.css";
const seatsRow = props => {
  return Object.keys(props.seats[props.N]).map(key => {
    return props.seats[props.N][key] === "available" ? (
      <div className={`${classes.seat} ${classes.available} `}>{key}</div>
    ) : (
      <div className={`${classes.seat}`}></div>
    );
  });
};
export default seatsRow;

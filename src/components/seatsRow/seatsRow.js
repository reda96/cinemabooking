import React from "react";
import classes from "./seatsRow.css";
const seatsRow = props => {
  return Object.keys(props.seats[props.N]).map(key => {
    return props.seats[props.N][key].status === "available" ? (
      <div key={key} className={`${classes.seat} ${classes.available} `}>
        {props.seats[props.N][key].value}
      </div>
    ) : (
      <div key={key} className={classes.space}></div>
    );
  });
};
export default seatsRow;

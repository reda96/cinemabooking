import React from "react";
import classes from "./seatsRow.css";
import Spinner2 from "../UI/Spinner/Spinner2";
const seatsRow = props => {
  props.seats[props.N].splice(0, 1);
  return Object.keys(props.seats[props.N]).map(key => {
    let loading = true;
    console.log(
      props.screenNumber,
      props.date,
      props.time,
      props.film,
      props.N
    );

    switch (props.seats[props.N][parseInt(key)].status) {
      case "available":
        return (
          <div
            key={key}
            onClick={() =>
              props.bookSeat({
                screenNumber: props.screenNumber,
                date: props.date,
                time: props.time,
                film: props.film,
                N: props.N,
                key
              })
            }
            className={`${classes.seat} ${classes.available} `}
          >
            {loading ? <Spinner2 /> : props.seats[props.N][key].value}
          </div>
        );
      case "booked":
        return (
          <div
            key={key}
            className={`${classes.seat} ${classes.available} `}
          ></div>
        );
    }
    return props.seats[props.N][parseInt(key)].status === "available" ? (
      <div
        key={key}
        onClick={() =>
          props.bookSeat({
            screenNumber: props.screenNumber,
            date: props.date,
            time: props.time,
            film: props.film,
            N: props.N,
            key
          })
        }
        className={`${classes.seat} ${classes.available} `}
      >
        {loading ? <Spinner2 /> : props.seats[props.N][key].value}
      </div>
    ) : (
      <div key={key} className={classes.space}></div>
    );
  });
};
export default seatsRow;

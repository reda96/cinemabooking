import React from "react";
import classes from "./seatsRow.css";
import Spinner2 from "../UI/Spinner/Spinner2";
import { connect } from "react-redux";
class seatsRow extends React.Component {
  render() {
    // console.log();

    // this.props.seats[this.props.N].splice(0, 1);
    return Object.keys(this.props.seats[this.props.N]).map(key => {
      console.log(
        this.props.screenNumber,
        this.props.date,
        this.props.time,
        this.props.film,
        this.props.N
      );
      if (this.props.seats[this.props.N][parseInt(key)] != null) {
        if (
          this.props.seats[this.props.N][parseInt(key)].status === "available"
        ) {
          return (
            <div
              key={key}
              onClick={() =>
                this.props.bookSeat({
                  screenNumber: this.props.screenNumber,
                  date: this.props.date,
                  time: this.props.time,
                  film: this.props.film,
                  N: this.props.N,
                  key,
                  value: this.props.seats[this.props.N][key].value
                })
              }
              className={`${classes.seat} ${classes.available} `}
            >
              {this.props.loading ? (
                <Spinner2 />
              ) : (
                this.props.seats[this.props.N][key].value
              )}
            </div>
          );
        } else if (
          this.props.seats[this.props.N][parseInt(key)].status === "booked"
        ) {
          return (
            <div key={key} className={`${classes.seat} ${classes.booked} `}>
              {" "}
              {this.props.loading ? (
                <Spinner2 />
              ) : (
                this.props.seats[this.props.N][key].value
              )}
            </div>
          );
        } else {
          return <div key={key} className={classes.space}></div>;
        }
      }
    });
  }
}
const mapStateToProps = state => {
  return {
    loading: state.screens.loading,
    seats: state.screens.seats
  };
};
export default connect(mapStateToProps)(seatsRow);

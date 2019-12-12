import React, { Component } from "react";
import classes from "./Screen.css";
import SeatsRow from "../../components/seatsRow/seatsRow";
class Screen extends Component {
  state = {
    seats: {
      A: {
        "1": "space",
        "2": "space",
        "3": "available",
        "4": "available",
        "5": "available",
        "6": "available",
        "7": "available",
        "8": "available",
        "9": "available",
        "10": "available",
        "11": "available",
        "12": "available",
        "13": "available",
        "14": "available",
        "15": "available",
        "16": "available",
        "17": "available",
        "18": "available",
        "19": "space",
        "20": "space"
      }
    }
  };

  render() {
    return (
      <div className={classes.row}>
        <div className={classes.seatingMessage}>2D with intermission</div>
        <div className={classes.seatingSamples}>
          <ul className={classes.list}>
            <li>
              <div
                className={`${classes.unavailable} ${classes.seatingSample}`}
              ></div>
              unavailable
            </li>
            <li>
              <div
                className={`${classes.yourSeat} ${classes.seatingSample}`}
              ></div>
              your seat
            </li>
            <li>
              <div
                className={`${classes.available}  ${classes.seatingSample}`}
              ></div>
              available
            </li>
          </ul>
        </div>
        <div className={classes.Screen}>
          <div className={classes.screenText}>Screen</div>
          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat}`}></div>
          </div>
          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat} ${classes.rowKey}`}>A</div>
            <SeatsRow seats={this.state.seats} N="A" />
          </div>

          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat} ${classes.rowKey}`}>B</div>
          </div>

          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat} ${classes.rowKey}`}>C</div>
          </div>

          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat} ${classes.rowKey}`}>D</div>
          </div>

          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat} ${classes.rowKey}`}>E</div>
          </div>

          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat} ${classes.rowKey}`}>F</div>
          </div>

          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat} ${classes.rowKey}`}>G</div>
          </div>
          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat} ${classes.rowKey}`}>H</div>
          </div>
          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat} ${classes.rowKey}`}>I</div>
          </div>
          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat} ${classes.rowKey}`}>J</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Screen;

import React, { Component } from "react";
import classes from "./Screen.css";
import SeatsRow from "../../components/seatsRow/seatsRow";
class Screen extends Component {
  state = {
    seats: {
      A: {
        "1": { status: "available", value: 1 },
        "2": { status: "available", value: 2 },
        "3": { status: "available", value: 3 },
        "4": { status: "available", value: 4 },
        "5": { status: "available", value: 5 },
        "6": { status: "available", value: 6 },
        "7": { status: "available", value: 7 },
        "8": { status: "available", value: 8 },
        "9": { status: "available", value: 9 },
        "10": { status: "space", value: 0 },

        "11": { status: "available", value: 10 },
        "12": { status: "available", value: 11 },
        "13": { status: "available", value: 12 },
        "14": { status: "available", value: 13 },
        "15": { status: "available", value: 14 },
        "16": { status: "available", value: 15 },
        "17": { status: "available", value: 16 },
        "18": { status: "available", value: 17 },
        "19": { status: "available", value: 18 }
      },
      B: {
        "1": { status: "available", value: 1 },
        "2": { status: "available", value: 2 },
        "3": { status: "available", value: 3 },
        "4": { status: "available", value: 4 },
        "5": { status: "available", value: 5 },
        "6": { status: "available", value: 6 },
        "7": { status: "available", value: 7 },
        "8": { status: "available", value: 8 },
        "9": { status: "available", value: 9 },
        "10": { status: "space", value: 0 },

        "11": { status: "available", value: 10 },
        "12": { status: "available", value: 11 },
        "13": { status: "available", value: 12 },
        "14": { status: "available", value: 13 },
        "15": { status: "available", value: 14 },
        "16": { status: "available", value: 15 },
        "17": { status: "available", value: 16 },
        "18": { status: "available", value: 17 },
        "19": { status: "available", value: 18 }
      },
      C: {
        "1": { status: "available", value: 1 },
        "2": { status: "available", value: 2 },
        "3": { status: "available", value: 3 },
        "4": { status: "available", value: 4 },
        "5": { status: "available", value: 5 },
        "6": { status: "available", value: 6 },
        "7": { status: "available", value: 7 },
        "8": { status: "available", value: 8 },
        "9": { status: "available", value: 9 },
        "10": { status: "space", value: 0 },

        "11": { status: "available", value: 10 },
        "12": { status: "available", value: 11 },
        "13": { status: "available", value: 12 },
        "14": { status: "available", value: 13 },
        "15": { status: "available", value: 14 },
        "16": { status: "available", value: 15 },
        "17": { status: "available", value: 16 },
        "18": { status: "available", value: 17 },
        "19": { status: "available", value: 18 }
      },
      D: {
        "1": { status: "available", value: 1 },
        "2": { status: "available", value: 2 },
        "3": { status: "available", value: 3 },
        "4": { status: "available", value: 4 },
        "5": { status: "available", value: 5 },
        "6": { status: "available", value: 6 },
        "7": { status: "available", value: 7 },
        "8": { status: "available", value: 8 },
        "9": { status: "available", value: 9 },
        "10": { status: "space", value: 0 },

        "11": { status: "available", value: 10 },
        "12": { status: "available", value: 11 },
        "13": { status: "available", value: 12 },
        "14": { status: "available", value: 13 },
        "15": { status: "available", value: 14 },
        "16": { status: "available", value: 15 },
        "17": { status: "available", value: 16 },
        "18": { status: "available", value: 17 },
        "19": { status: "available", value: 18 }
      },
      E: {
        "1": { status: "available", value: 1 },
        "2": { status: "available", value: 2 },
        "3": { status: "available", value: 3 },
        "4": { status: "available", value: 4 },
        "5": { status: "available", value: 5 },
        "6": { status: "available", value: 6 },
        "7": { status: "available", value: 7 },
        "8": { status: "available", value: 8 },
        "9": { status: "available", value: 9 },
        "10": { status: "space", value: 0 },

        "11": { status: "available", value: 10 },
        "12": { status: "available", value: 11 },
        "13": { status: "available", value: 12 },
        "14": { status: "available", value: 13 },
        "15": { status: "available", value: 14 },
        "16": { status: "available", value: 15 },
        "17": { status: "available", value: 16 },
        "18": { status: "available", value: 17 },
        "19": { status: "available", value: 18 }
      },
      F: {
        "1": { status: "available", value: 1 },
        "2": { status: "available", value: 2 },
        "3": { status: "available", value: 3 },
        "4": { status: "available", value: 4 },
        "5": { status: "available", value: 5 },
        "6": { status: "available", value: 6 },
        "7": { status: "available", value: 7 },
        "8": { status: "available", value: 8 },
        "9": { status: "available", value: 9 },
        "10": { status: "space", value: 0 },

        "11": { status: "available", value: 10 },
        "12": { status: "available", value: 11 },
        "13": { status: "available", value: 12 },
        "14": { status: "available", value: 13 },
        "15": { status: "available", value: 14 },
        "16": { status: "available", value: 15 },
        "17": { status: "available", value: 16 },
        "18": { status: "available", value: 17 },
        "19": { status: "available", value: 18 }
      },
      G: {
        "1": { status: "available", value: 1 },
        "2": { status: "available", value: 2 },
        "3": { status: "available", value: 3 },
        "4": { status: "available", value: 4 },
        "5": { status: "available", value: 5 },
        "6": { status: "available", value: 6 },
        "7": { status: "available", value: 7 },
        "8": { status: "available", value: 8 },
        "9": { status: "available", value: 9 },
        "10": { status: "space", value: 0 },

        "11": { status: "available", value: 10 },
        "12": { status: "available", value: 11 },
        "13": { status: "available", value: 12 },
        "14": { status: "available", value: 13 },
        "15": { status: "available", value: 14 },
        "16": { status: "available", value: 15 },
        "17": { status: "available", value: 16 },
        "18": { status: "available", value: 17 },
        "19": { status: "available", value: 18 }
      },
      H: {
        "1": { status: "available", value: 1 },
        "2": { status: "available", value: 2 },
        "3": { status: "available", value: 3 },
        "4": { status: "available", value: 4 },
        "5": { status: "available", value: 5 },
        "6": { status: "available", value: 6 },
        "7": { status: "available", value: 7 },
        "8": { status: "available", value: 8 },
        "9": { status: "available", value: 9 },
        "10": { status: "space", value: 0 },

        "11": { status: "available", value: 10 },
        "12": { status: "available", value: 11 },
        "13": { status: "available", value: 12 },
        "14": { status: "available", value: 13 },
        "15": { status: "available", value: 14 },
        "16": { status: "available", value: 15 },
        "17": { status: "available", value: 16 },
        "18": { status: "available", value: 17 },
        "19": { status: "available", value: 18 }
      },
      I: {
        "1": { status: "available", value: 1 },
        "2": { status: "available", value: 2 },
        "3": { status: "available", value: 3 },
        "4": { status: "available", value: 4 },
        "5": { status: "available", value: 5 },
        "6": { status: "available", value: 6 },
        "7": { status: "available", value: 7 },
        "8": { status: "available", value: 8 },
        "9": { status: "available", value: 9 },
        "10": { status: "space", value: 0 },

        "11": { status: "available", value: 10 },
        "12": { status: "available", value: 11 },
        "13": { status: "available", value: 12 },
        "14": { status: "available", value: 13 },
        "15": { status: "available", value: 14 },
        "16": { status: "available", value: 15 },
        "17": { status: "available", value: 16 },
        "18": { status: "available", value: 17 },
        "19": { status: "available", value: 18 }
      },
      J: {
        "1": { status: "available", value: 1 },
        "2": { status: "available", value: 2 },
        "3": { status: "available", value: 3 },
        "4": { status: "available", value: 4 },
        "5": { status: "available", value: 5 },
        "6": { status: "available", value: 6 },
        "7": { status: "available", value: 7 },
        "8": { status: "available", value: 8 },
        "9": { status: "available", value: 9 },

        "10": { status: "available", value: 10 },
        "11": { status: "available", value: 11 },
        "12": { status: "available", value: 12 },
        "13": { status: "available", value: 13 },
        "14": { status: "available", value: 14 },
        "15": { status: "available", value: 15 },
        "16": { status: "available", value: 16 },
        "17": { status: "available", value: 17 },
        "18": { status: "available", value: 18 },
        "19": { status: "available", value: 19 },
        "20": { status: "available", value: 20 }
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
            <SeatsRow seats={this.state.seats} N="B" />
          </div>

          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat} ${classes.rowKey}`}>C</div>
            <SeatsRow seats={this.state.seats} N="C" />
          </div>

          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat} ${classes.rowKey}`}>D</div>
            <SeatsRow seats={this.state.seats} N="D" />
          </div>

          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat} ${classes.rowKey}`}>E</div>
            <SeatsRow seats={this.state.seats} N="E" />
          </div>

          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat} ${classes.rowKey}`}>F</div>
            <SeatsRow seats={this.state.seats} N="F" />
          </div>

          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat} ${classes.rowKey}`}>G</div>
            <SeatsRow seats={this.state.seats} N="G" />
          </div>
          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat} ${classes.rowKey}`}>H</div>
            <SeatsRow seats={this.state.seats} N="H" />
          </div>
          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat} ${classes.rowKey}`}>I</div>
            <SeatsRow seats={this.state.seats} N="I" />
          </div>
          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat} ${classes.rowKey}`}>J</div>
            <SeatsRow seats={this.state.seats} N="J" />
          </div>
        </div>
      </div>
    );
  }
}

export default Screen;

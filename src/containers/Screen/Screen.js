import classes from "./Screen.css";
import SeatsRow from "../../components/seatsRow/seatsRow";
import React, { Component } from "react";
import Spinner from "../../components/UI/Spinner/Spinner";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
  faFilm,
  faCalendar,
  faClock,
  faMoneyBill,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/UI/Button/Button";
class Screen extends Component {
  state = {
    reservations: [],
    fetchedTimes: [],
    screens: [],
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
        "20": { status: "available", value: 20 },
        "21": { status: "available", value: 21 }
      }
    }
  };

  componentDidMount() {
    this.props.onFetchScreen({
      date: this.props.selectedDate,
      time: this.props.selectedTime,
      screen: this.props.selectedScreen
    });
  }
  componentDidUpdate() {}

  render() {
    console.log(this.props.reservations.length);

    let Screen = <Spinner />;
    console.log(this.props.seats);

    if (Object.keys(this.props.seats).length > 0) {
      Screen = (
        <div className={classes.Screen}>
          <div className={classes.screenText}>Screen</div>
          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat}`}></div>
          </div>
          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat} ${classes.rowKey}`}>A</div>
            <div>
              <SeatsRow
                seats={this.props.seats}
                bookSeat={this.props.onBookSeat}
                N="A"
                screenNumber={this.props.selectedScreen}
                date={this.props.selectedDate}
                time={this.props.selectedTime}
                film={this.props.selectedFilm}
              />
            </div>
            <div className={`${classes.seat} ${classes.rowKey}`}>A</div>
          </div>

          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat} ${classes.rowKey}`}>B</div>
            <div>
              <SeatsRow
                seats={this.props.seats}
                bookSeat={this.props.onBookSeat}
                N="B"
                screenNumber={this.props.selectedScreen}
                date={this.props.selectedDate}
                time={this.props.selectedTime}
                film={this.props.selectedFilm}
              />
            </div>
            <div className={`${classes.seat} ${classes.rowKey}`}>B</div>
          </div>

          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat} ${classes.rowKey}`}>C</div>
            <div>
              <SeatsRow
                seats={this.props.seats}
                bookSeat={this.props.onBookSeat}
                N="C"
                screenNumber={this.props.selectedScreen}
                date={this.props.selectedDate}
                time={this.props.selectedTime}
                film={this.props.selectedFilm}
              />
            </div>
            <div className={`${classes.seat} ${classes.rowKey}`}>C</div>
          </div>

          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat} ${classes.rowKey}`}>D</div>
            <div>
              <SeatsRow
                seats={this.props.seats}
                bookSeat={this.props.onBookSeat}
                N="D"
                screenNumber={this.props.selectedScreen}
                date={this.props.selectedDate}
                time={this.props.selectedTime}
                film={this.props.selectedFilm}
              />
            </div>
            <div className={`${classes.seat} ${classes.rowKey}`}>D</div>
          </div>

          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat} ${classes.rowKey}`}>E</div>
            <div>
              <SeatsRow
                seats={this.props.seats}
                bookSeat={this.props.onBookSeat}
                N="E"
                screenNumber={this.props.selectedScreen}
                date={this.props.selectedDate}
                time={this.props.selectedTime}
                film={this.props.selectedFilm}
              />
            </div>
            <div className={`${classes.seat} ${classes.rowKey}`}>E</div>
          </div>

          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat} ${classes.rowKey}`}>F</div>
            <div>
              <SeatsRow
                seats={this.props.seats}
                bookSeat={this.props.onBookSeat}
                N="F"
                screenNumber={this.props.selectedScreen}
                date={this.props.selectedDate}
                time={this.props.selectedTime}
                film={this.props.selectedFilm}
              />
            </div>
            <div className={`${classes.seat} ${classes.rowKey}`}>F</div>
          </div>

          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat} ${classes.rowKey}`}>G</div>
            <div>
              <SeatsRow
                seats={this.props.seats}
                bookSeat={this.props.onBookSeat}
                N="G"
                screenNumber={this.props.selectedScreen}
                date={this.props.selectedDate}
                time={this.props.selectedTime}
                film={this.props.selectedFilm}
              />
            </div>
            <div className={`${classes.seat} ${classes.rowKey}`}>G</div>
          </div>
          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat} ${classes.rowKey}`}>H</div>
            <div>
              <SeatsRow
                seats={this.props.seats}
                bookSeat={this.props.onBookSeat}
                N="H"
                screenNumber={this.props.selectedScreen}
                date={this.props.selectedDate}
                time={this.props.selectedTime}
                film={this.props.selectedFilm}
              />
            </div>
            <div className={`${classes.seat} ${classes.rowKey}`}>H</div>
          </div>
          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat} ${classes.rowKey}`}>I</div>
            <div>
              <SeatsRow
                seats={this.props.seats}
                bookSeat={this.props.onBookSeat}
                N="I"
                screenNumber={this.props.selectedScreen}
                date={this.props.selectedDate}
                time={this.props.selectedTime}
                film={this.props.selectedFilm}
              />
            </div>
            <div className={`${classes.seat} ${classes.rowKey}`}>I</div>
          </div>
          <div className={`${classes.singleBookingRow} ${classes.bookingRow}`}>
            <div className={`${classes.seat} ${classes.rowKey}`}>J</div>
            <div>
              <SeatsRow
                bookSeat={this.props.onBookSeat}
                N="J"
                screenNumber={this.props.selectedScreen}
                date={this.props.selectedDate}
                time={this.props.selectedTime}
                film={this.props.selectedFilm}
              />
            </div>
            <div className={`${classes.seat} ${classes.rowKey}`}>J</div>
          </div>
        </div>
      );
    }
    return (
      <div className={classes.row}>
        <div className={classes.reservationDetails}>
          <div style={{ float: "left", color: "#ffffff" }}>
            <FontAwesomeIcon icon={faFilm} />
            {this.props.filmName}
            {"| "} <FontAwesomeIcon icon={faCalendar} />
            {this.props.filmDate}
            {"| "} <FontAwesomeIcon icon={faClock} />
            {this.props.filmTime}
            {"| "}
            <FontAwesomeIcon icon={faMoneyBill} />
            {this.props.reservations.length * 60}
          </div>
          <div>
            <div style={{ paddingTop: "40px" }} />
            <div>
              <div
                className={classes.stages}
                style={{
                  width: "450px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr 1fr"
                }}
              >
                <div className={classes.circle}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={classes.fontawesome}
                  />
                  <p
                    style={{
                      marginLeft: "-10px",

                      fontSize: "10px"
                    }}
                  >
                    SEATING
                  </p>
                </div>
                <div className={classes.circle}>
                  <p
                    style={{
                      marginTop: "35px",
                      marginLeft: "-10px",
                      color: "#efefef",
                      fontSize: "10px"
                    }}
                  >
                    USERINFO
                  </p>
                </div>
                <div className={classes.circle}>
                  <p
                    style={{
                      marginTop: "35px",
                      marginLeft: "-10px",
                      color: "#efefef",
                      fontSize: "10px"
                    }}
                  >
                    PAYMENT
                  </p>
                </div>
                <div className={classes.circle}>
                  <p
                    style={{
                      marginTop: "35px",
                      marginLeft: "-10px",
                      color: "#efefef",
                      fontSize: "10px"
                    }}
                  >
                    MONEY COLLECTION
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
        {Screen}

        <hr style={{ marginTop: "40px" }}></hr>
        <div>
          <Button
            classes={classes.Next}
            disabled={this.props.reservations.length > 0 ? false : true}
            clicked={() => this.props.history.replace("/userInfo")}
          >
            next <FontAwesomeIcon icon={faChevronRight} />
          </Button>

          <Button
            classes={classes.previous}
            clicked={() => {
              this.props.onCancel(this.props.reservations);
              this.props.history.replace("/");
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} /> previous
          </Button>
          <Button
            classes={classes.Cancel}
            clicked={() => {
              console.log(this.props.reservations);
              this.props.onCancel(this.props.reservations);
              this.props.history.replace("/");
            }}
          >
            <FontAwesomeIcon icon={faTimes} /> cancel
          </Button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    selectedFilm: state.bookingDetails.filmName,
    selectedTime: state.bookingDetails.time,
    selectedScreen: state.bookingDetails.screen,
    selectedDate: state.bookingDetails.date,
    seats: state.screens.seats,
    reservations: state.screens.reservationDetails,
    filmName: state.bookingDetails.filmName,
    filmDate: state.bookingDetails.date,
    filmTime: state.bookingDetails.time
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchScreen: details => dispatch(actions.fetchScreens(details)),
    onBookSeat: details => dispatch(actions.bookSeat(details)),
    onCancel: details => dispatch(actions.cancelBooking(details))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Screen);

import React, { Component } from "react";
import classes from "./BookingDetails.css";
import Poster from "../../components/Poster/Poster";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/UI/Button/Button";
class BookingDetails extends Component {
  state = {};

  getTheDate = c => {
    const t = new Date();
    let today = new Date(t);
    today.setDate(today.getDate() + c);

    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const thisMonth = months[today.getMonth()]; // getMonth
    const day = weekday[today.getDay()];
    const date = day + " " + today.getUTCDate() + " " + thisMonth;
    return date;
  };
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.gridContainer}>
          <div>
            <Poster width="225px" height="340px" />
          </div>
          <div style={{ marginTop: "60px" }}>
            <FontAwesomeIcon
              className={classes.FontAwesomeIcon}
              icon={faCalendar}
            />
            <FontAwesomeIcon
              className={classes.FontAwesomeIcon}
              icon={faClock}
            />
          </div>
          <div>
            <div style={{ height: "auto" }}>
              <p>
                <strong>Movie:</strong>{" "}
              </p>
            </div>

            <div style={{ display: "flex" }}>
              <select className={classes.Select}>
                <option value="0" disabled selected>
                  Choose Date{" "}
                </option>
                <option value="1">{this.getTheDate(0)} </option>
                <option value="2">{this.getTheDate(1)} </option>
                <option value="3">{this.getTheDate(2)} </option>
                <option value="4">{this.getTheDate(3)} </option>
                <option value="5">{this.getTheDate(4)} </option>
              </select>
            </div>
            <div style={{ display: "flex" }}>
              <select className={classes.Select}>
                <option disabled selected>
                  Choose ShowTime
                </option>
                <option value="1">03:00 pm</option>
                <option value="2">06:00 pm</option>
                <option value="3">09:00 pm</option>
                <option value="4">12:00 am</option>
              </select>
            </div>
            <div>
              <select className={classes.Select}>
                <option disabled selected>
                  Choose Screen
                </option>
                <option value="0">Screen 1</option>
                <option value="1">Screen 2</option>
                <option value="2">Screen 3</option>
                <option value="3">Screen 4</option>
              </select>
            </div>
          </div>
        </div>
        <hr style={{ width: "800px", marginTop: "40px" }}></hr>
        <Button classes={classes.Next}>next ></Button>
      </div>
    );
  }
}

export default BookingDetails;

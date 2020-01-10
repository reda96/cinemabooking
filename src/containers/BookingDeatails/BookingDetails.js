import React, { Component } from "react";
import classes from "./BookingDetails.css";
import Poster from "../../components/Poster/Poster";
import Spinner from "../../components/UI/Spinner/Spinner";
import {
  faCalendar,
  faClock,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/UI/Button/Button";
import imagesArray from "../../assets/images";
import { connect } from "react-redux";
import axios from "../../axios-orders";
import * as actions from "../../store/actions/index";
import { Redirect } from "react-router-dom";
class BookingDetails extends Component {
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
  state = {
    date: "DEFAULT",
    time: "DEFAULT",
    screen: "DEFAULT"
  };

  componentDidMount() {
    this.props.onFetchTimes();
    const times = {
      //   firstDay: {
      //     Date: this.getTheDate(0),
      //     "03:00pm": {
      //       screen1: "Terminator: Dark Fate",
      //       screen2: "Jumanji: The Next Level",
      //       screen3: "Ford v. Ferrari / Le Mans' 66",
      //       screen4: "The Money",
      //       screen5: "Frozen II"
      //     },
      //     "06:00pm": {
      //       screen1: "Terminator: Dark Fate",
      //       screen2: "Jumanji: The Next Level",
      //       screen3: "Ford v. Ferrari / Le Mans' 66",
      //       screen4: "The Money",
      //       screen5: "Frozen II"
      //     },
      //     "09:00pm": {
      //       screen1: "Terminator: Dark Fate",
      //       screen2: "Jumanji: The Next Level",
      //       screen3: "Ford v. Ferrari / Le Mans' 66",
      //       screen4: "The Money",
      //       screen5: "Frozen II"
      //     },
      //     "12:00am": {
      //       screen1: "Terminator: Dark Fate",
      //       screen2: "Jumanji: The Next Level",
      //       screen3: "Ford v. Ferrari / Le Mans' 66",
      //       screen4: "The Money",
      //       screen5: "Frozen II"
      //     }
      //   },
      //   secondDay: {
      //     Date: this.getTheDate(1),
      //     "03:00pm": {
      //       screen1: "Terminator: Dark Fate",
      //       screen2: "Jumanji: The Next Level",
      //       screen3: "Ford v. Ferrari / Le Mans' 66",
      //       screen4: "The Money",
      //       screen5: "Frozen II"
      //     },
      //     "06:00pm": {
      //       screen1: "Terminator: Dark Fate",
      //       screen2: "Jumanji: The Next Level",
      //       screen3: "Ford v. Ferrari / Le Mans' 66",
      //       screen4: "The Money",
      //       screen5: "Frozen II"
      //     },
      //     "09:00pm": {
      //       screen1: "Terminator: Dark Fate",
      //       screen2: "Jumanji: The Next Level",
      //       screen3: "Ford v. Ferrari / Le Mans' 66",
      //       screen4: "The Money",
      //       screen5: "Frozen II"
      //     },
      //     "12:00am": {
      //       screen1: "Terminator: Dark Fate",
      //       screen2: "Jumanji: The Next Level",
      //       screen3: "Ford v. Ferrari / Le Mans' 66",
      //       screen4: "The Money",
      //       screen5: "Frozen II"
      //     }
      //   },
      //   thirdDay: {
      //     Date: this.getTheDate(2),
      //     "03:00pm": {
      //       screen1: "Terminator: Dark Fate",
      //       screen2: "Jumanji: The Next Level",
      //       screen3: "Ford v. Ferrari / Le Mans' 66",
      //       screen4: "The Money",
      //       screen5: "Frozen II"
      //     },
      //     "06:00pm": {
      //       screen1: "Terminator: Dark Fate",
      //       screen2: "Jumanji: The Next Level",
      //       screen3: "Ford v. Ferrari / Le Mans' 66",
      //       screen4: "The Money",
      //       screen5: "Frozen II"
      //     },
      //     "09:00pm": {
      //       screen1: "Terminator: Dark Fate",
      //       screen2: "Jumanji: The Next Level",
      //       screen3: "Ford v. Ferrari / Le Mans' 66",
      //       screen4: "The Money",
      //       screen5: "Frozen II"
      //     },
      //     "12:00am": {
      //       screen1: "Terminator: Dark Fate",
      //       screen2: "Jumanji: The Next Level",
      //       screen3: "Ford v. Ferrari / Le Mans' 66",
      //       screen4: "The Money",
      //       screen5: "Frozen II"
      //     }
      //   },
      //   fourthDay: {
      //     Date: this.getTheDate(3),
      //     "03:00pm": {
      //       screen1: "Terminator: Dark Fate",
      //       screen2: "Jumanji: The Next Level",
      //       screen3: "Ford v. Ferrari / Le Mans' 66",
      //       screen4: "The Money",
      //       screen5: "Frozen II"
      //     },
      //     "06:00pm": {
      //       screen1: "Terminator: Dark Fate",
      //       screen2: "Jumanji: The Next Level",
      //       screen3: "Ford v. Ferrari / Le Mans' 66",
      //       screen4: "The Money",
      //       screen5: "Frozen II"
      //     },
      //     "09:00pm": {
      //       screen1: "Terminator: Dark Fate",
      //       screen2: "Jumanji: The Next Level",
      //       screen3: "Ford v. Ferrari / Le Mans' 66",
      //       screen4: "The Money",
      //       screen5: "Frozen II"
      //     },
      //     "12:00am": {
      //       screen1: "Terminator: Dark Fate",
      //       screen2: "Jumanji: The Next Level",
      //       screen3: "Ford v. Ferrari / Le Mans' 66",
      //       screen4: "The Money",
      //       screen5: "Frozen II"
      //     }
      //   }
    };
    // axios.post("/times.json", times).then(res => console.log(res));
  }
  render() {
    let data = [];
    let showDates = <Spinner />;
    let showTimes = <Spinner />;
    let showScreens = <Spinner />;
    let gridContainer = <Spinner />;
    let name = <Spinner />;
    if (this.props.times.length > 0 && this.props.films.length > 0) {
      // console.log(this.props.times);

      const timeslist = this.props.times;
      for (let index = 0; index < timeslist.length; index++) {
        // console.log(times[index]);

        for (let key in timeslist[index]) {
          for (let key2 in timeslist[index][key]) {
            if (
              timeslist[index][key][key2] ===
              this.props.films[this.props.counter].name
            )
              data.push({
                date: timeslist[index]["Date"],
                time: key,
                screen: key2,
                name: timeslist[index][key][key2]
              });
          }
        }
        // console.log(data);
      }

      let dates = [];
      let times = [];
      let screens = [];
      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          if (!dates.includes(data[i]["date"])) dates.push(data[i]["date"]);
          if (!times.includes(data[i]["time"])) times.push(data[i]["time"]);
          if (!screens.includes(data[i]["screen"]))
            screens.push(data[i]["screen"]);
        }
      }
      name = (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 7fr",
            margin: "10px"
          }}
        >
          <strong> Movie: </strong>
          {data[0]["name"]}
        </div>
      );
      showDates = (
        <select
          className={classes.Select}
          defaultValue={this.state.date}
          onChange={e => this.setState({ date: e.target.value })}
        >
          <option value="DEFAULT" disabled hidden>
            Choose Date{" "}
          </option>
          {dates.map((d, i) => (
            <option className={classes.option} value={d} key={i}>
              {d}
            </option>
          ))}
        </select>
      );
      showTimes = (
        <select
          className={classes.Select}
          defaultValue={this.state.time}
          onChange={e => this.setState({ time: e.target.value })}
        >
          <option value="DEFAULT" disabled hidden>
            Choose ShowTime{" "}
          </option>
          {times.map((d, i) => (
            <option value={d} key={i}>
              {d}
            </option>
          ))}
        </select>
      );
      showScreens = (
        <select
          className={classes.Select}
          defaultValue={this.state.screen}
          onChange={e => this.setState({ screen: e.target.value })}
        >
          <option value="DEFAULT" disabled hidden>
            Choose Screen{" "}
          </option>
          {screens.map((d, i) => (
            <option value={d} key={i}>
              {d}
            </option>
          ))}
        </select>
      );
    }
    if (data.length > 0) {
      gridContainer = (
        <div className={classes.gridContainer}>
          <div>
            <Poster
              imgUrl={imagesArray[this.props.counter]}
              width="225px"
              height="340px"
            />
          </div>
          <div></div>
          <div>
            <div style={{ height: "auto" }}>{name}</div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 10fr" }}>
              {" "}
              <FontAwesomeIcon
                className={classes.FontAwesomeIcon}
                icon={faCalendar}
              />{" "}
              {showDates}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 10fr" }}>
              {" "}
              <FontAwesomeIcon
                className={classes.FontAwesomeIcon}
                icon={faClock}
              />
              {showTimes}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 10fr" }}>
              <div
                style={{ display: "block", width: "auto", height: "50px" }}
              />
              {showScreens}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className={classes.container}>
        {gridContainer}
        <hr style={{ width: "800px", marginTop: "40px" }}></hr>
        <Button
          classes={classes.Next}
          clicked={() => {
            this.props.onChoosenDetails({
              date: this.state.date,
              time: this.state.time,
              screen: this.state.screen,
              name: this.props.films[this.props.counter].name
            });
            this.props.history.replace("/screen");
          }}
        >
          next <FontAwesomeIcon icon={faChevronRight} />
        </Button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    films: state.films.films,
    loading: state.films.loading,
    counter: state.films.chosenFilm,
    times: state.bookingDetails.times,
    loadingTimes: state.bookingDetails.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchTimes: () => {
      dispatch(actions.fetchTimes());
    },
    onChoosenDetails: details => {
      dispatch(actions.choosenDetails(details));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookingDetails);

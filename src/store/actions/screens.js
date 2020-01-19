import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";
export const fetchScreensStart = () => {
  return {
    type: actionTypes.FETCH_SCREENS_START,
    loading: true
  };
};
export const fetchScreensSuccess = seats => {
  return {
    type: actionTypes.FETCH_SCREENS_SUCCESS,
    seats: seats
  };
};
export const fetchScreensFail = error => {
  return {
    type: actionTypes.FETCH_SCREENS_FAIL,
    error: error
  };
};

export const fetchScreens = ({ date, time, screen }) => {
  return dispatch => {
    dispatch(fetchScreensStart());
    // const queryParams =
    //   "?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"';

    axios
      .get("/screens.json")
      .then(res => {
        const fetchedScreens = [];
        let seats = [];
        for (let key in res.data) {
          fetchedScreens.push(res.data[key]);
        }

        if (screen == 0) {
          for (let i = 0; i < fetchedScreens[0][0].length; i++) {
            if (
              fetchedScreens[0][0][i].Date == date &&
              fetchedScreens[0][0][i].time == time
            ) {
              seats = fetchedScreens[0][0][i].seats;
            }
          }
        }
        if (screen == 1) {
          for (let i = 0; i < fetchedScreens[0][1].length; i++) {
            if (
              fetchedScreens[0][0][i].Date == date &&
              fetchedScreens[0][1][i].time === time
            ) {
              seats = fetchedScreens[0][1][i].seats;
            }
          }
        }
        if (screen === 2) {
          for (let i = 0; i < fetchedScreens[0][2].length; i++) {
            if (
              fetchedScreens[0][0][i].Date == date &&
              fetchedScreens[0][2][i].time === time
            ) {
              seats = fetchedScreens[0][2][i].seats;
              console.log(seats);
            }
          }
        }
        if (screen === 3) {
          for (let i = 0; i < fetchedScreens[0][3].length; i++) {
            if (
              fetchedScreens[0][0][i].Date == date &&
              fetchedScreens[0][3][i].time === time
            ) {
              seats = fetchedScreens[0][3][i].seats;
            }
          }
        }
        dispatch(fetchScreensSuccess(seats));
      })
      .catch(err => {
        dispatch(fetchScreensFail(err));
      });
  };
};
export const bookSeatStart = () => {
  return {
    type: actionTypes.BOOK_SEAT_START,
    loading: true
  };
};
export const bookSeatSuccess = seats => {
  return {
    type: actionTypes.BOOK_SEAT_SUCCESS,
    seats: seats
  };
};
export const bookSeatFail = error => {
  return {
    type: actionTypes.BOOK_SEAT_FAIL,
    error: error
  };
};
export const bookSeat = ({ screenNumber, date, time, film, N, key, value }) => {
  return dispatch => {
    dispatch(bookSeatStart());
    axios
      .get("/screens.json")
      .then(res => {
        let fetchedScreens = [];
        fetchedScreens = res.data;
        console.log(date + " " + time + " " + film + " " + screenNumber);

        let index = -1;
        Object.keys(fetchedScreens["-LyA4Sdi8S2klq_CVN8P"][screenNumber]).map(
          key => {
            if (
              fetchedScreens["-LyA4Sdi8S2klq_CVN8P"][screenNumber][key][
                "Date"
              ] === date &&
              fetchedScreens["-LyA4Sdi8S2klq_CVN8P"][screenNumber][key][
                "time"
              ] === time &&
              fetchedScreens["-LyA4Sdi8S2klq_CVN8P"][screenNumber][key][
                "film"
              ] === film
            ) {
              index = key;
            }
          }
        );

        axios
          .put(
            "screens/-LyA4Sdi8S2klq_CVN8P/" +
              screenNumber +
              "/" +
              index +
              "/seats" +
              "/" +
              N +
              "/" +
              key +
              ".json",
            { status: "booked", value: value }
          )
          .then(res => {
            console.log(res);
            axios
              .get(
                "screens/-LyA4Sdi8S2klq_CVN8P/" +
                  screenNumber +
                  "/" +
                  index +
                  "/seats.json"
              )
              .then(res => {
                dispatch(bookSeatSuccess(res.data));
              });
          })
          .catch(err => {
            dispatch(bookSeatFail(err));
          });
      })
      .catch(err => {
        dispatch(bookSeatFail(err));
      });
  };
};
export const choosenScreen = choosenScreen => {
  return {
    type: actionTypes.CHOOSE_FILM,
    choosenScreen: choosenScreen
  };
};

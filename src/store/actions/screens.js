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
          Object.keys(fetchedScreens[0][0]).map(key => {
            if (
              fetchedScreens[0][0][key].Date == date &&
              fetchedScreens[0][0][key].time == time
            ) {
              seats = fetchedScreens[0][0][key].seats;
            }
          });
        }
        if (screen == 1) {
          Object.keys(fetchedScreens[0][1]).map(key => {
            if (
              fetchedScreens[0][0][key].Date == date &&
              fetchedScreens[0][1][key].time === time
            ) {
              seats = fetchedScreens[0][1][key].seats;
            }
          });
        }
        if (screen === 2) {
          Object.keys(fetchedScreens[0][2]).map(key => {
            if (
              fetchedScreens[0][0][key].Date == date &&
              fetchedScreens[0][2][key].time === time
            ) {
              seats = fetchedScreens[0][2][key].seats;
            }
          });
        }
        if (screen === 3) {
          Object.keys(fetchedScreens[0][0]).map(key => {
            if (
              fetchedScreens[0][0][key].Date == date &&
              fetchedScreens[0][3][key].time === time
            ) {
              seats = fetchedScreens[0][3][key].seats;
            }
          });
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
export const bookSeatSuccess = (seats, reservationDetails) => {
  return {
    type: actionTypes.BOOK_SEAT_SUCCESS,
    seats: seats,
    reservationDetails: reservationDetails
  };
};
export const bookSeatFail = error => {
  return {
    type: actionTypes.BOOK_SEAT_FAIL,
    error: error
  };
};

export const bookSeat = ({
  screenNumber,
  date,
  time,
  film,
  N,
  key,
  value,
  email,
  reservationDetails
}) => {
  return dispatch => {
    dispatch(bookSeatStart());
    axios
      .get("/screens.json")
      .then(res => {
        let fetchedScreens = [];
        fetchedScreens = res.data;

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
            { status: "booked", value: value, email: email }
          )
          .then(res => {
            console.log(res);

            reservationDetails.push({
              screenNumber: screenNumber,
              date: date,
              time: time,
              film: film,
              N: N,
              key: key,
              index: index,
              value: value,
              email
            });
            axios
              .get(
                "screens/-LyA4Sdi8S2klq_CVN8P/" +
                  screenNumber +
                  "/" +
                  index +
                  "/seats.json"
              )
              .then(res => {
                dispatch(bookSeatSuccess(res.data, reservationDetails));
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

export const cancelBookingStart = () => {
  return {
    type: actionTypes.CANCEL_BOOKING_START,
    loading: true
  };
};
export const cancelBookingSuccess = seats => {
  return {
    type: actionTypes.CANCEL_BOOKING_SUCCESS,
    seats: seats
  };
};
export const cancelBookingFail = error => {
  return {
    type: actionTypes.CANCEL_BOOKING_FAIL,
    error: error
  };
};

export const cancelBooking = reservationDetails => {
  return dispatch => {
    dispatch(cancelBookingStart());
    console.log(reservationDetails.length);

    for (let i = 0; i < reservationDetails.length; i++) {
      axios
        .put(
          "screens/-LyA4Sdi8S2klq_CVN8P/" +
            reservationDetails[i].screenNumber +
            "/" +
            reservationDetails[i].index +
            "/seats" +
            "/" +
            reservationDetails[i].N +
            "/" +
            reservationDetails[i].key +
            ".json",
          { status: "available", value: reservationDetails[i].value }
        )
        .then(res => {
          console.log(res);

          axios
            .get(
              "screens/-LyA4Sdi8S2klq_CVN8P/" +
                reservationDetails[0].screenNumber +
                "/" +
                reservationDetails[0].index +
                "/seats.json"
            )
            .then(res => {
              if (i == reservationDetails.length - 1) {
                dispatch(cancelBookingSuccess(res.data));
              }
              console.log(res.data);
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
};

export const confirmReservationStart = () => {
  return {
    type: actionTypes.CONFIRM_RESERVATION_START,
    loading: true
  };
};
export const confirmReservationSuccess = () => {
  return {
    type: actionTypes.CONFIRM_RESERVATION_SUCCESS
  };
};
export const confirmReservationFail = error => {
  return {
    type: actionTypes.CONFIRM_RESERVATION_FAIL,
    error: error
  };
};
export const confirmReservation = reservation => {
  return dispatch => {
    dispatch(confirmReservationStart());

    axios
      .post("./reservation.json", reservation)
      .then(res => {
        console.log(res);
        dispatch(confirmReservationSuccess(res.data));
      })
      .catch(err => {
        console.log(err);
        confirmReservationFail();
      });
  };
};
export const choosenScreen = choosenScreen => {
  return {
    type: actionTypes.CHOOSE_FILM,
    choosenScreen: choosenScreen
  };
};

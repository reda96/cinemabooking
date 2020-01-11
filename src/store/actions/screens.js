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

        if (screen === "screen1") {
          for (let i = 0; i < fetchedScreens[0][0].length; i++) {
            if (
              fetchedScreens[0][0][i].Date == date &&
              fetchedScreens[0][0][i].time == time
            ) {
              seats = fetchedScreens[0][0][i].seats;
            }
          }
        }
        if (screen === "screen2") {
          for (let i = 0; i < fetchedScreens[0][1].length; i++) {
            if (
              fetchedScreens[0][0][i].Date == date &&
              fetchedScreens[0][1][i].time === time
            ) {
              seats = fetchedScreens[0][1][i].seats;
            }
          }
        }
        if (screen === "screen3") {
          for (let i = 0; i < fetchedScreens[0][2].length; i++) {
            if (
              fetchedScreens[0][0][i].Date == date &&
              fetchedScreens[0][2][i].time === time
            ) {
              seats = fetchedScreens[0][2][i].seats;
            }
          }
        }
        if (screen === "screen4") {
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

export const choosenScreen = choosenScreen => {
  return {
    type: actionTypes.CHOOSE_FILM,
    choosenScreen: choosenScreen
  };
};

import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";
export const fetchTimesStart = () => {
  return {
    type: actionTypes.FETCH_FILMS_START,
    loading: true
  };
};
export const fetchTimesSuccess = times => {
  return {
    type: actionTypes.FETCH_TIMES_SUCCESS,
    times: times
  };
};
export const fetchTimesFail = error => {
  return {
    type: actionTypes.FETCH_TIMES_FAIL,
    error: error
  };
};
export const fetchTimes = () => {
  return dispatch => {
    dispatch(fetchTimesStart());
    // const queryParams =
    //   "?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axios
      .get("/times.json")
      .then(res => {
        const fetchedTimes = [];
        for (let key in res.data) {
          for (let key2 in res.data[key]) {
            fetchedTimes.push({ ...res.data[key][key2], id: key2 });
          }
        }

        dispatch(fetchTimesSuccess(fetchedTimes));
        console.log(fetchedTimes);
      })
      .catch(err => {
        dispatch(fetchTimesFail(err));
      });
  };
};

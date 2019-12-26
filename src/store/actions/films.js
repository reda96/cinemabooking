import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";
export const fetchFilmsStart = () => {
  return {
    type: actionTypes.FETCH_FILMS_START,
    loading: true
  };
};
export const fetchFilmsSuccess = films => {
  return {
    type: actionTypes.FETCH_FILMS_SUCCESS,
    films: films
  };
};
export const fetchFilmsFail = error => {
  return {
    type: actionTypes.FETCH_FILMS_FAIL,
    error: error
  };
};
export const fetchFilms = () => {
  return dispatch => {
    dispatch(fetchFilmsStart());
    // const queryParams =
    //   "?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axios
      .get("/films.json")
      .then(res => {
        const fetchedFilms = [];
        for (let key in res.data) {
          fetchedFilms.push({ ...res.data[key], id: key });
        }

        dispatch(fetchFilmsSuccess(fetchedFilms));
      })
      .catch(err => {
        dispatch(fetchFilmsFail(err));
      });
  };
};

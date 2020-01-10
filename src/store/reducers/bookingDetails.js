import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  times: [],
  loading: false,
  time: "",
  date: "",
  screen: "",
  filmName: ""
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TIMES_SUCCESS:
      return updateObject(state, { times: action.times, loading: false });
    case actionTypes.FETCH_TIMES_START:
      return updateObject(state, { loading: true });
    case actionTypes.FETCH_TIMES_FAIL:
      return updateObject(state, { loading: false });
    case actionTypes.CHOOSEN_DETAILS:
      return updateObject(state, {
        time: action.time,
        date: action.date,
        screen: action.screen,
        filmName: action.filmName
      });
    default:
      return state;
  }
};
export default reducer;

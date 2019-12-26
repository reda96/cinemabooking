import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  films: [],
  chosenFilm: {},
  loading: false
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FILMS_SUCCESS:
      return updateObject(state, { films: action.films, loading: false });
    case actionTypes.FETCH_FILMS_START:
      return updateObject(state, { loading: true });

    case actionTypes.FETCH_FILMS_FAIL:
      return updateObject(state, { loading: false });
    default:
      return state;
  }
};
export default reducer;

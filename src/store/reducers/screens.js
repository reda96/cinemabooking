import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  seats: [],
  loading: false,
  reservationDetails: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SCREENS_SUCCESS:
      return updateObject(state, { seats: action.seats, loading: false });
    case actionTypes.FETCH_SCREENS_START:
      return updateObject(state, { loading: true });
    case actionTypes.FETCH_SCREENS_FAIL:
      return updateObject(state, { loading: false });
    case actionTypes.BOOK_SEAT_START:
      return updateObject(state, { loading: true });
    case actionTypes.BOOK_SEAT_SUCCESS:
      return updateObject(state, {
        seats: action.seats,
        loading: false,
        reservationDetails: action.reservationDetails
      });
    case actionTypes.BOOK_SEAT_FAIL:
      return updateObject(state, { loading: false });

    case actionTypes.CANCEL_BOOKING_START:
      return updateObject(state, { loading: true });
    case actionTypes.CANCEL_BOOKING_SUCCESS:
      return updateObject(state, {
        seats: action.seats,
        loading: false,
        reservationDetails: []
      });
    case actionTypes.CANCEL_BOOKING_FAIL:
      return updateObject(state, { loading: false });

    default:
      return state;
  }
};
export default reducer;

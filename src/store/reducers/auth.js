import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: "/",
  showLogInForm: false
};
const showLogInForm = (state, action) => {
  return updateObject(state, { showLogInForm: true });
};
const hideLogInForm = (state, action) => {
  return updateObject(state, { showLogInForm: false });
};
const setAuthRedirectPath = (state, action) => {
  return updateObject(state, { authRedirectPath: action.path });
};

const authStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};
const authSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    token: action.idToken,
    userId: action.userId
  });
};
const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};
const authLogout = (state, action) => {
  return updateObject(state, {
    userId: null,
    token: null
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action);
    case actionTypes.SHOW_LOGIN_FORM:
      return showLogInForm(state, action);
    case actionTypes.HIDE_LOGIN_FORM:
      return hideLogInForm(state, action);
    default:
      return state;
  }
};
export default reducer;

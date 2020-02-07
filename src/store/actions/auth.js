import * as actionTypes from "./actionTypes";
import axios from "axios";
export const authStart = () => {
  return { type: actionTypes.AUTH_START };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId
  };
};

export const authFail = error => {
  return { type: actionTypes.AUTH_FAIL, error: error };
};
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("localId");
  localStorage.removeItem("email");
  localStorage.removeItem("userName");
  return { type: actionTypes.AUTH_LOGOUT };
};
export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};
export const auth = (email, userName, password, isSignUp) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCFElpYjOYCRQ0k204XnYH6g_dn0ogx8BI";
    if (!isSignUp) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCFElpYjOYCRQ0k204XnYH6g_dn0ogx8BI";
      axios
        .get("https://cinemabooking-12d1c.firebaseio.com/users.json")
        .then(res => {
          Object.keys(res.data).map(key => {
            if (res.data[key].email === authData.email) {
              userName = res.data[key].userName.value;
            }
          });
        });
    } else {
      axios
        .post("https://cinemabooking-12d1c.firebaseio.com/users.json", {
          userName: userName,
          email: email
        })
        .then(res => {
          console.log(res);
        });
    }
    axios
      .post(url, authData)
      .then(res => {
        console.log(res);
        const expirationDate = new Date(
          new Date().getTime() + res.data.expiresIn * 1000
        );

        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("token", res.data.idToken);
        localStorage.setItem("localId", res.data.localId);
        localStorage.setItem("email", authData.email);
        localStorage.setItem("userName", userName);
        dispatch(authSuccess(res.data.idToken, res.data.localId));
        dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch(err => {
        // console.log(err);
        dispatch(authFail(err.response.data.error));
      });
  };
};
export const showLogInForm = () => {
  return { type: actionTypes.SHOW_LOGIN_FORM };
};
export const hideLogInForm = () => {
  return { type: actionTypes.HIDE_LOGIN_FORM };
};
export const setAuthRedirectPath = path => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  };
};
export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));

      if (expirationDate <= new Date()) {
        console.log("aa");

        dispatch(logout());
      } else {
        const localId = localStorage.getItem("localId");
        dispatch(authSuccess(token, localId));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};

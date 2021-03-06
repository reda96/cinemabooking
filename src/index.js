import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import films from "./store/reducers/films";
import bookingDetails from "./store/reducers/bookingDetails";
import auth from "./store/reducers/auth";
import screens from "./store/reducers/screens";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  films: films,
  bookingDetails: bookingDetails,
  screens: screens,
  auth: auth
});
const composeEnhancers =
  process.env.Node_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();

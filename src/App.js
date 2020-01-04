import React from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import Home from "./containers/Home/Home";
import Screen from "./containers/Screen/Screen";
import BookingDetails from "./containers/BookingDeatails/BookingDetails";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import classes from "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab);

function App() {
  let routes = (
    <Switch>
      <Route path="/bookingDetails" component={BookingDetails} />
      <Route path="/screen" component={Screen} />
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );
  return (
    <div>
      <div
        style={{
          height: "60px",
          // overflow: "hidden",
          backgroundColor: "#555555"
        }}
      >
        <div className={classes.social}>
          <FontAwesomeIcon
            className={`${classes.FontAwesomeIcon} ${classes.facebook}`}
            icon={["fab", "facebook-f"]}
          />
          <FontAwesomeIcon
            className={`${classes.FontAwesomeIcon} ${classes.twitter}`}
            icon={["fab", "twitter"]}
          />
          <FontAwesomeIcon
            className={`${classes.FontAwesomeIcon} ${classes.instgram}`}
            icon={["fab", "instagram"]}
          />
          <FontAwesomeIcon
            icon={["fab", "youtube"]}
            className={`${classes.FontAwesomeIcon} ${classes.youtube}`}
          />
        </div>
      </div>
      <Layout>{routes}</Layout>
    </div>
  );
}

export default App;

import React from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import Home from "./containers/Home/Home";
import Screen from "./containers/Screen/Screen";
import BookingDetails from "./containers/BookingDeatails/BookingDetails";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
function App() {
  let routes = (
    <Switch>
      <Route path="/bookingDetails" component={BookingDetails} />
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );
  return (
    <div>
      <Layout>{routes}</Layout>
    </div>
  );
}

export default App;

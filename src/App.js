import React from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import Home from "./containers/Home/Home";
import Screen from "./containers/Screen/Screen";
import BookingDetails from "./containers/BookingDeatails/BookingDetails";

function App() {
  return (
    <div>
      <Layout>
        <Home />
        {/* <Screen /> */}
        {/* <BookingDetails /> */}
      </Layout>
    </div>
  );
}

export default App;

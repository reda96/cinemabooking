import React from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import Home from "./containers/Home/Home";
import Screen from "./containers/Screen/Screen";

function App() {
  return (
    <div>
      <Layout>
        <Home />
        {/* <Screen /> */}
      </Layout>
    </div>
  );
}

export default App;

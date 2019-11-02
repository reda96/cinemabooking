import React from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import Home from "./containers/Home/Home";
function App() {
  return (
    <div>
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;

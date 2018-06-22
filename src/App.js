import React, { Component } from "react";
import Header from "./components/Header/header";
import Slide from "./components/Home/slider";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slide />
      </div>
    );
  }
}

export default App;

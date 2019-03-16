import React, { Component } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Route, Redirect } from "react-router";
import Home from "./pages/Home";
import World from "./pages/World";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/Home" component={Home} />
        <Route path="/World" component={World} />
      </div>
    );
  }
}

export default App;

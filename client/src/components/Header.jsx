import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className="App-header">
        <div className="j-container">
          <h1 className="blinky">¯\_(?)_/¯</h1>
          <h2>A programmer's blog.</h2>
        </div>
      </header>
    );
  }
}

export default Header;

import React, { Component } from "react";

class World extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="j-container">
        <section id="main-content">
          <div className="world" />
          <h1 className="py-3 pl-2">Hello World.</h1>
        </section>
      </div>
    );
  }
}

export default World;

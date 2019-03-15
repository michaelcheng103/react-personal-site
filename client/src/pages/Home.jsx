import React, { Component } from "react";
import Postpaginate from "../components/Postpaginate";
import Postlist from "../components/Postlist";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="j-container">
        <section id="main-content">
          <div className="container-fluid" />
          <h2 className="py-3 pl-2">Posts.</h2>
          <Postpaginate />
          <Postlist />
        </section>
      </div>
    );
  }
}

export default Home;

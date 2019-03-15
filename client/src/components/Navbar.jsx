import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="j-container">
        <div className="flex-container">
          <div id="navBar">
            <Link to="/Home">
              <i className="fa fa-home fa-2x fa-fw clickable" />
            </Link>

            <Link to="/World">
              <i className="fa fa-globe fa-2x fa-fw clickable" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

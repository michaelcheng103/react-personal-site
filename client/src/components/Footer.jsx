import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClickX = event => {
    event.target.parentElement.style.display = "none";
  };

  render() {
    return (
      <footer className="site-footer">
        <small>
          <button onClick={this.handleClickX} className="float-right">
            X
          </button>
          <div>
            <span>Copyright &copy; 2017 - 2019, Michael Cheng</span>
          </div>
          <div>
            <span>Powered By: NodeJS, ReactJS. Hosted On: Express</span>
          </div>
        </small>
      </footer>
    );
  }
}

export default Footer;

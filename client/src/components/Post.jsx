import React, { Component } from "react";
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <li>
        <span>{this.props.date}</span>
        <h4>{this.props.title}</h4>
        <p>{this.props.snippet}</p>
      </li>
    );
  }
}

export default Post;

import React, { Component } from "react";
import Post from "./Post";

class Postlist extends Component {
  render() {
    return (
      <ul className="post-list">
        {this.props.posts.map(post => (
          <Post
            key={post.id}
            date={post.date}
            title={post.title}
            snippet={post.snippet}
          />
        ))}
      </ul>
    );
  }
}

export default Postlist;

import React, { Component } from "react";
import Post from "./Post";

class Postlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch("/api/posts")
      .then(res => res.json())
      .then(posts => this.setState({ posts: posts }));
  }

  render() {
    return (
      <ul className="post-list">
        {this.state.posts.map(post => (
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

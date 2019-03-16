import React, { Component } from "react";
import Postpaginate from "../components/Postpaginate";
import Postlist from "../components/Postlist";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      currentPage: 1,
      postsPerPage: 3
    };
  }

  handlePrevious = () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      let currentPageNum = currentPage - 1;
      this.setState({ currentPage: currentPageNum });
    }
    //console.log(this);
  };

  handleNext = () => {
    const { posts, currentPage, postsPerPage } = this.state;
    if (currentPage < Math.ceil(posts.length / postsPerPage)) {
      let currentPageNum = currentPage + 1;
      this.setState({ currentPage: currentPageNum });
    }
    //console.log(this);
  };

  handleClick = event => {
    this.setState({ currentPage: Number(event.target.innerHTML) });
  };

  componentDidMount() {
    fetch("/api/posts")
      .then(res => res.json())
      .then(posts => this.setState({ posts: posts }));
  }

  render() {
    const { posts, currentPage, postsPerPage } = this.state;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="j-container">
        <section id="main-content container">
          <div className="col-8">
            <h2 className="py-3 pl-2">Posts.</h2>
            <Postpaginate
              pageNumbers={pageNumbers}
              handlePrevious={this.handlePrevious}
              handleNext={this.handleNext}
              handleClick={this.handleClick}
            />
            <Postlist posts={currentPosts} />
          </div>
        </section>
      </div>
    );
  }
}

export default Home;

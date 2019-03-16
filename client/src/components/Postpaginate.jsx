import React, { Component } from "react";

class Postpaginate extends Component {
  render() {
    const { pageNumbers, handlePrevious, handleNext, handleClick } = this.props;
    return (
      <div className="pagination">
        <nav aria-label="Post navigation">
          <ul className="pagination">
            <a
              className="page-link"
              href="#"
              onClick={handlePrevious}
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
            {pageNumbers.map(num => (
              <li className="page-item" key={num}>
                <a
                  className="page-link"
                  href="#"
                  onClick={handleClick}
                  aria-label={num}
                >
                  {num}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={handleNext}
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Postpaginate;

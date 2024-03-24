import React, { Component } from "react";

class Slider extends Component {
  render() {
    return (
      <div style={{ border: "5px solid white", borderRadius: "20px", padding: "10px", backdropFilter: "blur(15px)",
      backgroundColor: "rgba(255,255,255,0.2)" ,marginRight:"50px",marginLeft:"50px"}}>
        <div style={{ backgroundColor: "black", borderRadius: "20px" }}>
          <div id="carouselExampleFade" className="carousel slide carousel-fade">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://i.pinimg.com/736x/fa/9a/8a/fa9a8a55c1b85548186c05b4b45e503f.jpg"
                  className="d-block w-100"
                  alt="Slide 1"
                  style={{ height: "30rem" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://i.pinimg.com/736x/9f/cb/3f/9fcb3f6daf711d6d0b93ccb9ebd0cdef.jpg"
                  className="d-block w-100"
                  alt="Slide 2"
                  style={{ height: "30em" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://i.pinimg.com/736x/f2/1c/8d/f21c8d053313637bd0fe7bc83312b3b1.jpg"
                  className="d-block w-100"
                  alt="Slide 3"
                  style={{ height: "30rem" }}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-target="#carouselExampleFade"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-target="#carouselExampleFade"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;


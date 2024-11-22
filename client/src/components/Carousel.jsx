import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true, // Enable dots for navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Autoplay the carousel
    autoplaySpeed: 3000, // Speed of autoplay in milliseconds
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {/* First Slide */}
        <div className="carousel-slide">
          <div style={{ backgroundColor: "#FF5733", padding: "50px" }}>
            <h2>Flash Sale</h2>
            <p>Sasto. Ramro. Chitto.</p>
            <p>Up to 70% OFF</p>
            <button>Shop Now</button>
          </div>
        </div>
        {/* Second Slide */}
        <div className="carousel-slide">
          <div style={{ backgroundColor: "#F1C40F", padding: "50px" }}>
            <h2>Exclusive Deals</h2>
            <p>Save Big on Top Brands!</p>
            <p>Don't miss out!</p>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="carousel-slide">
          <div style={{ backgroundColor: "#F1C40F", padding: "50px" }}>
            <h2>Exclusive Deals</h2>
            <p>Save Big on Top Brands!</p>
            <p>Don't miss out!</p>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="carousel-slide">
          <div style={{ backgroundColor: "#F1C40F", padding: "50px" }}>
            <h2>Exclusive Deals</h2>
            <p>Save Big on Top Brands!</p>
            <p>Don't miss out!</p>
            <button>Shop Now</button>
          </div>
        </div>
        {/* Add more slides here */}
      </Slider>
    </div>
  );
};

export default Carousel;

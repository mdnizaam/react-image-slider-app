import React, { useState } from "react";
import "./Slide.css";

const IMAGE_DATA = [
  {
    image: "../../assets/image1.jpg",
    caption: "1st image caption",
  },
  {
    image: "../../assets/image2.jpg",
    caption: "2nd image caption",
  },
  {
    image: "../../assets/image3.jpg",
    caption: "3rd image caption",
  },
  {
    image: "../../assets/image4.jpg",
    caption: "4th image caption",
  },
];

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleImages = (count) => {
    let slideCount = 0;
    slideCount = currentSlide + count;
    setCurrentSlide((prev) => {
      if (slideCount > IMAGE_DATA?.length - 1) {
        return 0;
      }
      if (slideCount < 0) {
        return IMAGE_DATA?.length - 1;
      }
      return prev + count;
    });
  };
  return (
    <div className="slide-container">
      <div className="count">
        <h1>
          {currentSlide + 1}/{IMAGE_DATA?.length}
        </h1>
      </div>
      <div>
        <img
          src={IMAGE_DATA[currentSlide]?.image}
          alt=""
          style={{ width: "100%" }}
        />
      </div>
      <div className="image-caption">
        <h1>{IMAGE_DATA[currentSlide]?.caption}</h1>
      </div>
      <div>
        <button onClick={() => handleImages(-1)} className="prev">
          &#10094;
        </button>
        <button onClick={() => handleImages(1)} className="next">
          &#10095;
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        {IMAGE_DATA?.map((dot, index) => (
          <span
            onClick={() => setCurrentSlide(index)}
            style={{ background: index == currentSlide ? "#bbb" : "#fef" }}
            className="dots"
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slide;

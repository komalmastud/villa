import React from "react";
import Image1 from "../assets/hamptons1.jpg";
import Image2 from "../assets/hamptons-charm.360b249.jpg";
import Image3 from "../assets/hampton2.jpg";

const ImageSection = () => {
  return (
    <div className="image-container">
      <div className="left-image">
        <img src={Image1} alt="Full Image" className="full-image" />
      </div>
      <div className="right-images">
        <img src={Image2} alt="Half Image 1" className="half-image" />
        <img src={Image3} alt="Half Image 2" className="half-image" />
      </div>
    </div>
  );
};

export default ImageSection;

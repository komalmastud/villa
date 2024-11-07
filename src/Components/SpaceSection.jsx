import React from "react";
import Slider from "react-slick";
import space1 from "../assets/spaces1.jpeg";
import space2 from "../assets/spaces2.jpg";
import spaces3 from "../assets/spaces3.jpg";
import spaces4 from "../assets/spaces4.jpg";
import spaces5 from "../assets/spaces5.jpg";
import spaces6 from "../assets/spaces6.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Spaces = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="spaces-section" id="Spaces">
      <h4>Spaces</h4>
      <div className="spaces-slider-container">
        <Slider {...settings}>
          <div>
            <img src={space1} alt="Space 1" className="spaces-image" />
            <ul>
              <li>This bedroom is on the ground floor.</li>
              <li>The room offers pool views, AC, WiFi, king-sized beds.</li>
              <li>
                It has an attached bathroom with a bathtub, geyser, towel, and
                basic toiletries.
              </li>
            </ul>
          </div>
          <div>
            <img src={space2} alt="Space 2" className="spaces-image" />
            <ul>
              <li>This bedroom is on the ground floor.</li>
              <li>The room offers pool views, AC, WiFi, king-sized bed.</li>
              <li>
                It has an attached bathroom with a geyser, towel, and basic
                toiletries.
              </li>
            </ul>
          </div>
          <div>
            <img src={spaces3} alt="Space 3" className="spaces-image" />
            <ul>
              <li>This bedroom is on the ground floor.</li>
              <li>The room offers pool views, AC, WiFi, king-sized bed.</li>
              <li>
                It has an attached bathroom with a geyser, towel, and basic
                toiletries.
              </li>
            </ul>
          </div>
          <div>
            <img src={spaces4} alt="Space 4" className="spaces-image" />
            <ul>
              <li>This bedroom is on the ground floor.</li>
              <li>The room offers pool views, AC, WiFi, king-sized bed.</li>
              <li>
                It has an attached bathroom with a geyser, towel, and basic
                toiletries.
              </li>
            </ul>
          </div>
          <div>
            <img src={spaces5} alt="Space 5" className="spaces-image" />
            <ul>
              <li>This bedroom is on the ground floor.</li>
              <li>The room offers pool views, AC, WiFi, king-sized bed.</li>
              <li>
                It has an attached bathroom with a geyser, towel, and basic
                toiletries.
              </li>
            </ul>
          </div>
          <div>
            <img src={spaces6} alt="Space 6" className="spaces-image" />
            <ul>
              <li>This bedroom is on the ground floor.</li>
              <li>The room offers pool views, AC, WiFi, king-sized bed.</li>
              <li>
                It has an attached bathroom with a geyser, towel, and basic
                toiletries.
              </li>
            </ul>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Spaces;

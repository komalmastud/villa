import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import necessary modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Swipper.css"; // CSS styles for the component

// Import images
import Slide1 from "../assets/image3.jpg";
import Slide2 from "../assets/image4.jpg";
import Slide3 from "../assets/image7.jpg";
import Slide4 from "../assets/image7.jpg";
import Slide5 from "../assets/image7.jpg";
import Slide6 from "../assets/image7.jpg";
import Slide7 from "../assets/image7.jpg";
import Slide8 from "../assets/image7.jpg";

function Features() {
  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000, // Autoplay delay
          disableOnInteraction: false, // Allow user interaction after autoplay
        }}
        onSlideChange={() => console.log("Slide changed")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="Photos">
            <img src={Slide1} alt="Slide 1" />
            <div className="overlay">
              <h1>Book 1, Get 1 Night Free</h1>
              <button className="overbutton">Save on Stays</button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="Photos">
            <img src={Slide2} alt="Slide 2" />
            <div className="overlay">
              <h1>Ready To Welcome You</h1>
              <button className="overbutton">Best Getaways</button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="Photos">
            <img src={Slide3} alt="Slide 3" />
            <div className="overlay">
              <h1>Enjoy Your Stay!</h1>
              <button className="overbutton">Book Now</button>
            </div>
          </div>
        </SwiperSlide>

        {/* Additional slides... */}
        <SwiperSlide>
          <div className="Photos">
            <img src={Slide4} alt="Slide 4" />
            <div className="overlay">
              <h1>Experience Luxury</h1>
              <button className="overbutton">Discover More</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="Photos">
            <img src={Slide5} alt="Slide 5" />
            <div className="overlay">
              <h1>Relax and Unwind</h1>
              <button className="overbutton">See Offers</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="Photos">
            <img src={Slide6} alt="Slide 6" />
            <div className="overlay">
              <h1>Stay with Us</h1>
              <button className="overbutton">Check Availability</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="Photos">
            <img src={Slide7} alt="Slide 7" />
            <div className="overlay">
              <h1>Your Comfort Awaits</h1>
              <button className="overbutton">Learn More</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="Photos">
            <img src={Slide8} alt="Slide 8" />
            <div className="overlay">
              <h1>Ready To Welcome You</h1>
              <button className="overbutton">Best Getaways</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Features;

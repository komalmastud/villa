import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Slide1 from "../assets/image3.jpg";
import Slide2 from "../assets/image4.jpg";
import Slide3 from "../assets/image5.jpg";
import Slide4 from "../assets/image6.jpg";
import Slide5 from "../assets/image7.jpg";
import Slide6 from "../assets/image10.jpg";
import Slide7 from "../assets/image9.jpg";
import Slide8 from "../assets/image2.jpg";

function Features() {
  return (
    <>
      <div></div>
      <Swiper
        className="swiper-container"
        spaceBetween={2}
        slidesPerView={1}
        modules={[Navigation, Pagination, Autoplay]} // Add Autoplay here
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          // Autoplay configuration
          delay: 3000, // Delay in milliseconds
          disableOnInteraction: false, // Allow interaction after autoplay
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="Photos">
            <img src={Slide1} alt="Room 1" />
            <div className="over">
              <h1>Book1, Get 1 Night Free</h1>
            </div>
            <button className="overbutton">Save on Stays</button>
          </div>
        </SwiperSlide>
        {/* Other SwiperSlide components remain unchanged */}
        <SwiperSlide>
          <div className="Photos">
            <img src={Slide2} alt="Room 2" />
            <div className="over">
              <h1>Ready To Welcome You</h1>
            </div>
            <button className="overbutton">Best Getaways</button>
          </div>
        </SwiperSlide>
        {/* ...repeat for remaining slides... */}
        <SwiperSlide>
          <div className="Photos">
            <img src={Slide8} alt="Room 8" />
            <div className="over">
              <h1>Ready To Welcome You</h1>
            </div>
            <button className="overbutton">Best Getaways</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Features;

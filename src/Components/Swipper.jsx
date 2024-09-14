import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
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
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
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
        <SwiperSlide>
          <div className="Photos">
            <img src={Slide2} alt="Room 2" />
            <div className="over">
              <h1>Ready To Welcome You</h1>
            </div>
            <button className="overbutton">Best Getways</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Photos">
            <img src={Slide3} alt="Room 3" />
            <div className="over">
              <h1>September Price Drop</h1>
            </div>
            <button className="overbutton">Newest Escape</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Photos">
            <img src={Slide4} alt="Room 4" />
            <div className="over">
              <h1>Book1, Get 1 Night Free</h1>
            </div>
            <button className="overbutton">Save on Stays</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Photos">
            <img src={Slide5} alt="Room 5" />
            <div className="over">
              <h1>Ready To Welcome You</h1>
            </div>
            <button className="overbutton">Best Getways</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Photos">
            <img src={Slide6} alt="Room 6" />
            <div className="over">
              <h1>September Price Drop</h1>
            </div>
            <button className="overbutton">Newest Escape</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Photos">
            <img src={Slide7} alt="Room 7" />
            <div className="over">
              <h1>Book1, Get 1 Night Free</h1>
            </div>
            <button className="overbutton">Save on Stays</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Photos">
            <img src={Slide8} alt="Room 8" />
            <div className="over">
              <h1>Ready To Welcome You</h1>
            </div>
            <button className="overbutton">Best Getways</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Features;

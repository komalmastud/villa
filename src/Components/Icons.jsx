import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Icons.css";

// Import your icons
import Slide1 from "../assets/Igatpuri.svg";
import Slide2 from "../assets/Lonavala.svg";
import Slide3 from "../assets/Pune.svg";
import Slide4 from "../assets/Ooty.svg";
import Slide5 from "../assets/Nashik.svg";
import Slide6 from "../assets/Nashik - Final Website Icon.svg";
import Slide7 from "../assets/Nainital.svg";
import Slide8 from "../assets/Mussoorie.svg";
import Slide9 from "../assets/Alibaug.svg";
import Slide10 from "../assets/Shimla.svg";
import Slide11 from "../assets/Bhimtal.svg";
import Slide12 from "../assets/Chandigarh.svg";
import Slide13 from "../assets/Conoor.svg";
import Slide14 from "../assets/Dehradun.svg";
import Slide15 from "../assets/Goa.svg";
import Slide16 from "../assets/Gurgaon.svg";
import "./Icons.css"; // Ensure your CSS file is included

const IconSwiper = () => {
  return (
    <div className="fulldiv">
      <h3>PICK A DESTINATION</h3>
      <Swiper
        className="icons-container"
        spaceBetween={10}
        slidesPerView={7} // Show 7 icons at once
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={Slide1} alt="Igatpuri" />
          <h4>Igatpuri</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} alt="Lonavala" />
          <h4>Lonavala</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide3} alt="Pune" />
          <h4>Pune</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide4} alt="Ooty" />
          <h4>Ooty</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide5} alt="Nashik" />
          <h4>Nashik</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide6} alt="Near Nashik" />
          <h4>Near Nashik</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide7} alt="Nainital" />
          <h4>Nainital</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide8} alt="Mussoorie" />
          <h4>Mussoorie</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide9} alt="Alibaug" />
          <h4>Alibaug</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide10} alt="Shimla" />
          <h4>Shimla</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide11} alt="Bhimtal" />
          <h4>Bhimtal</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide12} alt="Chandigarh" />
          <h4>Chandigarh</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide13} alt="Conoor" />
          <h4>Conoor</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide14} alt="Dehradun" />
          <h4>Dehradun</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide15} alt="Goa" />
          <h4>Goa</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide16} alt="Gurgaon" />
          <h4>Gurgaon</h4>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default IconSwiper;

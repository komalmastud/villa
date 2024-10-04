import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide9 from "../assets/Alibaug.svg";
import Slide11 from "../assets/Bhimtal.svg";
import Slide12 from "../assets/Chandigarh.svg";
import Slide13 from "../assets/Conoor.svg";
import Slide14 from "../assets/Dehradun.svg";
import Slide15 from "../assets/Goa.svg";
import Slide16 from "../assets/Gurgaon.svg";
import Slide1 from "../assets/Igatpuri.svg";
import Slide2 from "../assets/Lonavala.svg";
import Slide8 from "../assets/Mussoorie.svg";
import Slide7 from "../assets/Nainital.svg";
import Slide6 from "../assets/Nashik - Final Website Icon.svg";
import Slide5 from "../assets/Nashik.svg";
import Slide4 from "../assets/Ooty.svg";
import Slide3 from "../assets/Pune.svg";
import Slide10 from "../assets/Shimla.svg";
import "./Icons.css";
function Features() {
  return (
    <>
      <div className="fulldiv">
        <h3>PICK A DESTINATION</h3>
        <label className="Image">
          <Swiper
            className="swiper-container"
            spaceBetween={9}
            slidesPerView={10}
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
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
              <img src={Slide4} alt="Ooaty" />
              <h4>Ooaty</h4>
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
              <h4>Naintal</h4>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slide8} alt="Mussorie" />
              <h4>Mussorie</h4>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slide9} alt="Alibag" />
              <h4>Alibag</h4>
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
              <h4>Connor</h4>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slide14} alt="Dehradun" />
              <h4>Dehradhun</h4>
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
        </label>
      </div>
    </>
  );
}

export default Features;

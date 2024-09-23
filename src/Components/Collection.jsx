import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Collection1 from "../assets/image3.jpg";
import Collection2 from "../assets/image4.jpg";
import Collection3 from "../assets/image5.jpg";
import Collection4 from "../assets/image6.jpg";
import Collection5 from "../assets/image7.jpg";
import Collection6 from "../assets/image10.jpg";
import Collection7 from "../assets/image9.jpg";
import Collection8 from "../assets/image2.jpg";

function Collection() {
  return (
    <>
      <div className="heading">
        <h3>CHOOSE A COLLECTION</h3>
      </div>
      <Swiper
        className="collection-container"
        spaceBetween={20}
        slidesPerView={5}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="collection-photos">
            <img src={Collection1} alt="Collection 1" />
            <div className="collection-over">
              <h2>Bogo(pay 1,Stay 2 Nights)</h2>
            </div>
            <p> </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="collection-photos">
            <img src={Collection2} alt=" Collection 2" />
            <div className="collection-over">
              <h2>Flat 25% OFF on 2 Nights</h2>
            </div>
            <p></p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="collection-photos">
            <img src={Collection3} alt=" Collection 3" />
            <div className="collection-over">
              <h2>Stay 3, Pay 2</h2>
            </div>
            <p></p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="collection-photos">
            <img src={Collection4} alt=" Collection 4" />
            <div className="collection-over">
              <h2>Top Luxury Vistas</h2>
            </div>
            <p></p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="collection-photos">
            <img src={Collection5} alt=" Collection 5" />
            <div className="collection-over">
              <h2>Corporate OffSite Vistas</h2>
            </div>
            <p></p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="collection-photos">
            <img src={Collection6} alt=" Collection 6" />
            <div className="collection-over">
              <h2>Best Rated Vistas</h2>
            </div>
            <p></p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="collection-photos">
            <img src={Collection7} alt=" Collection 7" />
            <div className="collection-over">
              <h2>WOW Getaways</h2>
            </div>
            <p></p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="collection-photos">
            <img src={Collection8} alt=" Collection 8" />
            <div className="collection-over">
              <h2>Safaries with Stay Vista </h2>
            </div>
            <p></p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Collection;

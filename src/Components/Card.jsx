import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "./ProductCard";

import Pranam from "../assets/card1.jpg";
import Simoes from "../assets/card2.jpg";
import Saligo from "../assets/card3.jpg";
import Sidhowal from "../assets/card4.jpg";
import Woods from "../assets/card5.jpg";
import tulip from "../assets/card6.jpg";
import dhaulandhar from "../assets/card7.jpg";
import Aloe from "../assets/card8.jpg";
import Amethyst from "../assets/card9.jpg";
const Card = () => {
  return (
    <div className="product">
      <Swiper
        slidesPerView={9} // Show one slide at a time
        navigation // Enable navigation arrows
        pagination={{ clickable: true }} // Enable pagination dots
        loop={true} // Enable infinite looping
        modules={[Navigation, Pagination]} // Add navigation and pagination modules
      >
        <SwiperSlide>
          <ProductCard
            image={Pranam}
            name="Pranam"
            description="Alibaug, Maharastra"
            price="Upto 15 Guests + 6 Rooms + 6 Bath"
            des_price="₹50000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={Simoes}
            name="Casa simoes -Candolim"
            des_price="₹50000"
            price="₹65000"
            description="stay here"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={Saligo}
            name="Villa Amenthyst - Aligo"
            des_price="₹50000"
            price="₹65000"
            description="stay here"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={Sidhowal}
            name="Sidhowal Lodge"
            des_price="₹50000"
            price="₹65000"
            description="stay here"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={Woods}
            name="The Woods - Chail"
            des_price="₹50000"
            price="₹65000"
            description="stay here"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={tulip}
            name="The Woods - Chail"
            des_price="₹50000"
            price="₹65000"
            description="stay here"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={dhaulandhar}
            name="The Woods - Chail"
            des_price="₹50000"
            price="₹65000"
            description="stay here"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={Aloe}
            name="The Woods - Chail"
            des_price="₹50000"
            price="₹65000"
            description="stay here"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={Amethyst}
            name="The Woods - Chail"
            des_price="₹50000"
            price="₹65000"
            description="stay here"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Card;

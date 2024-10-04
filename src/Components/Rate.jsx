import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Rate.css";
import ProductCard from "./ProductCard";

// Import your images
import Moksha from "../assets/rate.jpg";
import Amara from "../assets/rate2.jpg";
import Hamptons from "../assets/rate3.jpg";
import House from "../assets/rate4.jpg";
import Casa from "../assets/rate6.jpg";
import Wander from "../assets/rate7.jpg";
import Prism from "../assets/rate8.jpg";
import Magnolia from "../assets/rate9.jpg";
import Bella from "../assets/rate10.jpg";

const Rate = () => {
  return (
    <div className="rate">
      <Swiper
        slidesPerView={4} // Show 4 slides at a time by default
        spaceBetween={30} // Adds space between slides
        navigation // Enable navigation arrows
        pagination={{ clickable: true }} // Enable pagination dots
        loop={true} // Enable infinite looping
        modules={[Navigation, Pagination]} // Add navigation and pagination modules
        breakpoints={{
          640: {
            slidesPerView: 1, // On small screens, show 1 slide at a time
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2, // On medium screens, show 2 slides at a time
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // On large screens, show 3 slides at a time
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 4, // On extra-large screens, show 4 slides at a time
            spaceBetween: 40,
          },
        }}
      >
        {/* Swiper slides with unique data */}
        <SwiperSlide>
          <ProductCard
            image={Moksha}
            name="Pranam"
            description="Alibaug, Maharastra"
            price="Upto 15 Guests + 6 Rooms + 6 Bath"
            des_price="₹50,000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={Amara}
            name="Casa Simoes - Candolim"
            description="Candolim, Goa"
            price="₹65,000"
            des_price="₹50,000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={Hamptons}
            name="Villa Amethyst - Aligo"
            description="Stay at Villa Amethyst"
            price="₹65,000"
            des_price="₹50,000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={House}
            name="Sidhowal Lodge"
            description="Luxury Lodge in Sidhowal"
            price="₹65,000"
            des_price="₹50,000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={Casa}
            name="The Woods - Chail"
            description="Stay at The Woods in Chail"
            price="₹65,000"
            des_price="₹50,000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={Wander}
            name="Tulip Resort"
            description="Relax at Tulip Resort"
            price="₹65,000"
            des_price="₹50,000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={Prism}
            name="Dhaulandhar Heights"
            description="Stay at Dhaulandhar Heights"
            price="₹65,000"
            des_price="₹50,000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={Magnolia}
            name="Aloe Retreat"
            description="Aloe Retreat, Himachal Pradesh"
            price="₹65,000"
            des_price="₹50,000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={Bella}
            name="Amethyst Villa"
            description="Stay at Amethyst Villa"
            price="₹65,000"
            des_price="₹50,000"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Rate;

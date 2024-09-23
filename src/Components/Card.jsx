import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "./ProductCard";

// Import your images
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
        slidesPerView={3} // Show 3 slides at a time by default
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
            slidesPerView: 4, // On large screens, show 4 slides at a time
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 5, // On extra-large screens, show 5 slides at a time
            spaceBetween: 40,
          },
        }}
      >
        {/* Swiper slides with unique data */}
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
            description="Candolim, Goa"
            price="₹65000"
            des_price="₹50000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={Saligo}
            name="Villa Amenthyst - Aligo"
            description="Stay at Villa Amenthyst"
            price="₹65000"
            des_price="₹50000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={Sidhowal}
            name="Sidhowal Lodge"
            description="Luxury Lodge in Sidhowal"
            price="₹65000"
            des_price="₹50000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={Woods}
            name="The Woods - Chail"
            description="Stay at The Woods in Chail"
            price="₹65000"
            des_price="₹50000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={tulip}
            name="Tulip Resort"
            description="Relax at Tulip Resort"
            price="₹65000"
            des_price="₹50000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={dhaulandhar}
            name="Dhaulandhar Heights"
            description="Stay at Dhaulandhar Heights"
            price="₹65000"
            des_price="₹50000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={Aloe}
            name="Aloe Retreat"
            description="Aloe Retreat, Himachal Pradesh"
            price="₹65000"
            des_price="₹50000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={Amethyst}
            name="Amethyst Villa"
            description="Stay at Amethyst Villa"
            price="₹65000"
            des_price="₹50000"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Card;

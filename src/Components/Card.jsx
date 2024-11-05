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
import Chail from "../assets/card9.jpg";

const Card = () => {
  return (
    <div className="product">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        modules={[Navigation, Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <ProductCard
            image={Pranam}
            name="Pranam"
            description="Alibaug, Maharastra"
            info="Upto 15 Guests + 6 Rooms + 6 Baths"
            des_price="₹53,500"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={Simoes}
            name="Casa Simoes - Candolim"
            description="Goa, Goa"
            info="Upto 7 Guests + 3 Rooms + 3 Baths"
            des_price="₹36,020"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={Saligo}
            name="Villa Amethyst - saligo"
            description="Goa, Goa"
            info="Upto 10 Guests + 4 Rooms + 4 Baths"
            des_price="₹15,435"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={Sidhowal}
            name="Sidhowal Lodge"
            description="Shimla, Himachal Pradesh"
            info="Upto 3 Guests + 1 Room + 1 Bath"
            des_price="₹11,248"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={Woods}
            name="Out Of The Woods"
            description="Kasauli, Himachal Pradesh"
            info="Upto 9 Guests + 3 Rooms + 3 Baths"
            des_price="₹22,630"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={tulip}
            name="Tulip Terraces"
            description="Manali, Himachal Pradesh"
            info="Upto 14 Guests + 7 Rooms + 7 Baths"
            des_price="₹37,750"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={dhaulandhar}
            name="Dhaulandhar Heights"
            description="Dharamshala, Himachal Pradesh"
            info="Upto 8 Guests + 4 Rooms + 4 Baths"
            des_price="₹30,400"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={Aloe}
            name="Aloe Villa"
            description="Naintal, Uttarakhand"
            info="Upto 8 Guests + 4 Rooms + 4 Baths"
            des_price="₹27,451"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image={Chail}
            name="The Woods - Chail"
            description="Shimla, Himachal Pradesh"
            info="Upto 12 Guests + 5 Rooms + 5 Baths"
            des_price="₹50,000"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Card;

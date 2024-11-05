import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProductCard.css";

// Import images
import Image1 from "../assets/card1.jpg";
import Image2 from "../assets/card2.jpg";
import Image3 from "../assets/card3.jpg";
import Image4 from "../assets/card4.jpg";
import Image5 from "../assets/card5.jpg";
import Image6 from "../assets/card6.jpg";

// Sample data for the slides
const slideData = [
  {
    title: "Pranaam",
    location: "Alibaug, Maharashtra",
    description: "Upto 15 Guests + 6 Rooms + 6 Baths",
    price: "64,000",
    text: "For Per Night + Taxes",
    image: Image1,
  },
  {
    title: "Mountain Retreat",
    location: "Alibaug, Maharashtra",
    description: "Upto 15 Guests + 6 Rooms + 6 Baths",
    price: "64,000",
    text: "For Per Night + Taxes",
    image: Image2,
  },
  {
    title: "City Break",
    location: "Alibaug, Maharashtra",
    description: "Upto 15 Guests + 6 Rooms + 6 Baths",
    price: "64,000",
    text: "For Per Night + Taxes",
    image: Image3,
  },
  {
    title: "Beachfront Paradise",
    location: "Alibaug, Maharashtra",
    description: "Upto 15 Guests + 6 Rooms + 6 Baths",
    price: "64,000",
    text: "For Per Night + Taxes",
    image: Image4,
  },
  {
    title: "Cultural Journey",
    location: "Alibaug, Maharashtra",
    description: "Upto 15 Guests + 6 Rooms + 6 Baths",
    price: "64,000",
    text: "For Per Night + Taxes",
    image: Image5,
  },
  {
    title: "Adventure Awaits",
    location: "Alibaug, Maharashtra",
    description: "Upto 15 Guests + 6 Rooms + 6 Baths",
    price: "64,000",
    text: "For Per Night + Taxes",
    image: Image6,
  },
];

const ProductSlideSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {slideData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="product">
            <img
              src={slide.image}
              alt={slide.title}
              className="product-image"
            />
            <div className="product-content">
              <h3 className="product-title">{slide.title}</h3>
              <p className="product-location">{slide.location}</p>{" "}
              {/* Add location */}
              <p className="product-description">{slide.description}</p>
              <p className="product-price">₹{slide.price}</p> {/* Add price */}
              <p className="product-text">{slide.text}</p>{" "}
              {/* Add price description */}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlideSwiper;

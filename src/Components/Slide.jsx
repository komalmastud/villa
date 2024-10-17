import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom"; // Import Link
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ResponsiveCards.css";

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
    title: "Alibaug",
    description: "Indulge in a premium experience with our luxury escapes.",
    image: Image1,
    path: "/alibaug", // Add path for navigation
  },
  {
    title: "Mountain Retreat",
    description: "Reconnect with nature at our scenic mountain retreats.",
    image: Image2,
    path: "/mountain-retreat",
  },
  {
    title: "City Break",
    description: "Explore the vibrant city life with our exclusive offers.",
    image: Image3,
    path: "/city-break",
  },
  {
    title: "Beachfront Paradise",
    description: "Relax at our beachfront properties with stunning views.",
    image: Image4,
    path: "/beachfront-paradise",
  },
  {
    title: "Cultural Journey",
    description: "Immerse yourself in local culture with our guided tours.",
    image: Image5,
    path: "/cultural-journey",
  },
  {
    title: "Adventure Awaits",
    description:
      "Embark on a daring adventure with our specially curated packages.",
    image: Image6,
    path: "/adventure-awaits",
  },
];

const ResponsiveSlideSwiper = () => {
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
          <Link to={slide.path} className="slide">
            {" "}
            {/* Wrap in Link */}
            <img src={slide.image} alt={slide.title} className="slide-image" />
            <div className="slide-content">
              <h3 className="slide-title">{slide.title}</h3>
              <p className="slide-description">{slide.description}</p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ResponsiveSlideSwiper;

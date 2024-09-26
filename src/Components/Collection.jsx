import { useState } from "react";
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
  const [activeSlide, setActiveSlide] = useState(null);

  const handleImageClick = (index) => {
    setActiveSlide(index === activeSlide ? null : index); // Toggle blur
  };

  // Define an array of objects containing image, heading, and description
  const collections = [
    {
      image: Collection1,
      heading: "Luxury Escape",
      description:
        "Indulge in a premium experience with our luxury escapes. Book now and enjoy unmatched comfort.",
    },
    {
      image: Collection2,
      heading: "Mountain Retreat",
      description:
        "Reconnect with nature at our scenic mountain retreats. Perfect for a peaceful getaway.",
    },
    {
      image: Collection3,
      heading: "City Break",
      description:
        "Explore the vibrant city life with our exclusive city break offers. Stay in the heart of the action.",
    },
    {
      image: Collection4,
      heading: "Beachfront Paradise",
      description:
        "Relax at our beachfront properties with stunning ocean views and endless sunshine.",
    },
    {
      image: Collection5,
      heading: "Cultural Journey",
      description:
        "Immerse yourself in local culture with our guided tours and unique cultural experiences.",
    },
    {
      image: Collection6,
      heading: "Adventure Awaits",
      description:
        "For thrill-seekers, embark on a daring adventure with our specially curated packages.",
    },
    {
      image: Collection7,
      heading: "Romantic Getaway",
      description:
        "A perfect retreat for couples looking to rekindle romance in a beautiful, serene setting.",
    },
    {
      image: Collection8,
      heading: "Family Fun",
      description:
        "Bring the whole family for a fun-filled vacation, with activities for all ages.",
    },
  ];

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
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {collections.map((collection, index) => (
          <SwiperSlide key={index}>
            <div
              className={`collection-photos ${
                activeSlide === index ? "blur" : ""
              }`}
              onClick={() => handleImageClick(index)}
            >
              <img src={collection.image} alt={`Collection ${index + 1}`} />
              <div className="collection-over">
                <h2>{collection.heading}</h2>
                <p>{collection.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Collection;

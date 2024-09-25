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
        {[
          Collection1,
          Collection2,
          Collection3,
          Collection4,
          Collection5,
          Collection6,
          Collection7,
          Collection8,
        ].map((collection, index) => (
          <SwiperSlide key={index}>
            <div
              className={`collection-photos ${
                activeSlide === index ? "blur" : ""
              }`}
              onClick={() => handleImageClick(index)}
            >
              <img src={collection} alt={`Collection ${index + 1}`} />
              <div className="collection-over">
                <h2>Collection Heading {index + 1}</h2>
                <p>
                  This is the description for Collection {index + 1}. Book now
                  and get exclusive offers!
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Collection;

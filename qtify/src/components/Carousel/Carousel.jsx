import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Card from "../Card/Card";
import styles from "./Carousel.module.css";

function Carousel({ data = [] }) {
  return (
    <div className={styles.carousel}>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        slidesPerView={2}
        breakpoints={{
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 7 },
        }}
      >
        {data.map((album) => (
          <SwiperSlide key={album.id}>
            <Card
              image={album.image}
              follows={album.follows}
              title={album.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
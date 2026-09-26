import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Card from "../Card/Card";
import styles from "./Carousel.module.css";

function Carousel({ data = [], isSong = false }) {
  return (
    <div className={styles.carousel}>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={7}
        slidesPerGroup={2}
        breakpoints={{
          0: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          600: {
            slidesPerView: 4,
            slidesPerGroup: 2,
          },
          900: {
            slidesPerView: 5,
            slidesPerGroup: 2,
          },
          1200: {
            slidesPerView: 7,
            slidesPerGroup: 2,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Card
              image={item.image}
              follows={item.follows}
              likes={item.likes}
              title={item.title}
              isSong={isSong}
              artists={item.artists}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
import { React, useEffect } from "react";
import "./banner.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Banner = () => {
  return (
    <div className="banner">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        // autoplay={{ delay: 5000 }}
        modules={[Autoplay]}
        loop
        style={{ zIndex: 0 }}
      >
        <SwiperSlide>
          <img
            src="https://media.lavina.tech/media/original/6ce5a830-36d0-4849-aa1b-c7735c0e1117"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.lavina.tech/media/original/307f0b1a-66d9-49b8-8641-20ab64165154"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

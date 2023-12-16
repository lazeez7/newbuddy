import { React, useEffect } from "react";
import "./banner.css";

// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
});

const Banner = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {

      loop: true,
      
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 1000,
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []); 

  return (
    <div className="banner">
      <div className="swiper">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              src="https://media.lavina.tech/media/original/6ce5a830-36d0-4849-aa1b-c7735c0e1117"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="https://media.lavina.tech/media/original/307f0b1a-66d9-49b8-8641-20ab64165154"
              alt=""
            />
          </div>
          {/* Add more slides as needed */}
        </div>
          {/* <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div> */}
      </div>
    </div>
    </div>
  );
};

export default Banner;

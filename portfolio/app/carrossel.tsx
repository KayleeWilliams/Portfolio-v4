"use client";

// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";
// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";

export default function Carrossel() {


  const slides = Array.from({ length: 5 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
    <>
      <Swiper
        slidesPerView={1.1}
        centeredSlides={true}
        spaceBetween={16}
        loop={true}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={({ clickable: true})}
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide
            key={slideContent}
            virtualIndex={index}
            className="bg-gray-200"
          >
            {({ isActive }) => (
              <div
                className={`w-full h-full ${
                  isActive ? "active" : "not-active"
                }`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

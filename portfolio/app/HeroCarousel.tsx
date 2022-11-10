"use client";

// Import Swiper React components
import React from "react";
import Image from 'next/image';
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./HeroCarousel.css";
// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";

export default function HeroCarousel(props: any) {
  const slides = props.data;

  return (
    <>
      <Swiper
        id="hero"
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
        pagination={{ clickable: true }}
      >

        {slides.map((slide: any, index: number) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <Link
                href={slide.attributes.Link}
                className={`h-full w-full ${
                  isActive ? "opacity-100" : "opacity-50"
                }`}
              >
                <Image
                  src={`http://localhost:1337${slide.attributes.Cover.data.attributes.url}`}
                  alt={slide.attributes.Title}
                  fill
                />
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

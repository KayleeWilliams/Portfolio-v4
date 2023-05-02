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

  const breakpoints = {
    1024: {
      slidesPerView: 1.1,
      spaceBetween: 8,
    },
  };

  return (
    <>
      <div className="relative h-full hero-carousel">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={16}
          loop={true}
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={breakpoints}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="hero"
        >
          {slides.map((slide: any, index: number) => (
            <SwiperSlide key={slide.id}>
              {({ isActive }) => (
                <Link href={slide.attributes.Link}>
                  <div className="w-full h-full aspect-[320/93]">
                    <Image
                      src={`${slide.attributes.Cover.data.attributes.url}`}
                      alt={slide.attributes.Title}
                      fill
                      priority
                      className="transition ease-in-out delay-150 border-4 border-transparent hover:-translate-y-1 hover:border-white duration-300"
                    />
                  </div>
                </Link>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

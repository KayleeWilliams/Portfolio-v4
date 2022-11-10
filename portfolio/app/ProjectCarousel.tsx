"use client";

// Import Swiper React components
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Virtual } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/virtual";

import "./ProjectCarousel.css";

export default function ProjectCarousel(props: any) {
  const projects = props.data;

  return (
    <Swiper
      id="projects"
      slidesPerView={5.2}
      spaceBetween={12}
      navigation={true}
      modules={[Navigation, Virtual]}
      virtual={true}
      watchSlidesProgress={true}
    >
      {projects.map((project: any, index: number) => (
        <SwiperSlide key={project.id} virtualIndex={index}>
          {({ isVisible }) => (
            <Link
              href=""
              className={`w-full h-full`}>
              <Image
                src={`http://localhost:1337${project.attributes.Thumbnail.data.attributes.url}`}
                alt={project.attributes.Title}
                fill
              />
            </Link>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
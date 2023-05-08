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

  const breakpoints = {
    1024: {
      slidesPerView: 3.2,
      slidesPerGroup: 3,
      spaceBetween: 8,
    }
  };

  return (
    <div className="relative h-full project-list">
      <Swiper
        slidesPerView={2.075}
        slidesPerGroup={1}
        spaceBetween={4}
        navigation={true}
        modules={[Navigation, Virtual]}
        virtual={true}
        watchSlidesProgress={true}
        breakpoints={breakpoints}
        className="projects"
      >
        {projects.map((project: any, index: number) => (
          <SwiperSlide key={project.id} virtualIndex={index}>
            {({ isVisible }) => (
              <Link href={`projects/${project.attributes.Slug}`}>
                <div className="w-full h-full aspect-video transition ease-in-out delay-150 border-0 hover:border-4 border-transparent hover:-translate-y-1 hover:border-white duration-300">
                  <Image
                    src={`${project.attributes.Thumbnail.data.attributes.url}`}
                    alt={project.attributes.Title}
                    fill
                  />
                </div>
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

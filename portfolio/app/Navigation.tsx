"use client";

import Link from "next/link";
import { AiFillHome, AiOutlineCode, AiOutlineUser } from "react-icons/ai";
import { MdContactPage } from "react-icons/md";
import { useEffect } from "react";

export default function Navigation() {
    useEffect(() => {
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", scrollFunction);
      }
    }, []);

    function scrollFunction() {
      const navbar = document.getElementById("navbar");
      const cover = document.getElementsByClassName("cover-bg");

      if (navbar != null) {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          navbar.style.background = "hsla(307, 36%, 5%, 1)";
        } else {
          navbar.style.background = "hsla(307, 36%, 5%, 0)";
        }
      }

      // Reduce cover opacity on scroll
      if (cover != null && cover.length > 0) {
        const coverElement = cover[0] as HTMLElement;
        if (1 - window.scrollY / 500 > 0.1) {
          coverElement.style.opacity = `${1 - window.scrollY / 500}`;
        } else {
          coverElement.style.opacity = "0.1";
        }
      }
    }

  return (
    <>
      <div
        id="navbar"
        className="flex flex-row fixed gap-2 lg:gap-8 text-sm lg:text-xl font-[500] tracking-wider uppercase text-white py-4 w-full justify-center lg:justify-start px-1 lg:px-0 lg:pl-16 z-50 top-0"
      >
        <Link
          href="/"
          className="flex flex-row items-center gap-2 group"
          aria-label="Home"
        >
          <div className="w-6 h-6 lg:w-8 lg:h-8">
            <AiFillHome className="icon" />
          </div>
          <p className="group-hover:opacity-70 ease-in-out duration-300 delay-100">
            Home
          </p>
        </Link>
        <Link
          href="/projects"
          className="flex flex-row items-center gap-2 group"
          aria-label="Projects"
        >
          <div className="w-6 h-6 lg:w-8 lg:h-8">
            <AiOutlineCode className="icon" />
          </div>
          <p className="group-hover:opacity-70 ease-in-out duration-300 delay-100">
            My Projects
          </p>
        </Link>
        <Link
          href="/about"
          className="flex flex-row items-center gap-2 group"
          aria-label="About Me"
        >
          <div className="w-6 h-6 lg:w-8 lg:h-8">
            <AiOutlineUser className="icon" />
          </div>
          <p className="group-hover:opacity-70 ease-in-out duration-300 delay-100">
            About Me
          </p>
        </Link>
      </div>
    </>
  );
}

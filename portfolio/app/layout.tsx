"use client";

import { useEffect } from "react";
import Link from "next/link";
import "./global.css";

import Navigation from "./Navigation";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsMastodon } from "react-icons/bs";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        navbar.style.background = "hsla(270, 13%, 3%, 1)";
      } else {
        navbar.style.background = "hsla(270, 13%, 3%, 0)";
      }
    }

    if (cover != null) {
      if (cover.length > 0 && 1 - window.scrollY / 500 > 0.2) {
        cover[0].style.opacity = 1 - window.scrollY / 500;
      }
    }
  }

  return (
    <html>
      <body className="bg-black">
        <Navigation />
        <main className="mb-4 min-h-screen">{children}</main>
        <footer className="bg-[#080709] flex flex-row justify-center px-8 w-full text-center align-center h-12 z-auto bottom-0 opacity-100">
          <div className="flex flex-row gap-4">
            <Link href="http://github.com/KayleeWilliams" target="_blank">
              <AiFillGithub className="w-8 h-8 text-white hover:text-gray-200 transition delay-75 duration-300 ease-in-out hover:-translate-y-1" />
            </Link>
            <Link href="http://linkedin.com/in/kaylee-w/" target="_blank">
              <AiFillLinkedin className="w-8 h-8 text-white hover:text-gray-200 transition delay-75 duration-300 ease-in-out hover:-translate-y-1 " />
            </Link>
            <Link href="http://mastodon.social/@Kayleew" target="_blank">
              <BsMastodon className="w-8 h-8 text-white hover:text-gray-200 transition delay-75 duration-300 ease-in-out hover:-translate-y-1 " />
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}

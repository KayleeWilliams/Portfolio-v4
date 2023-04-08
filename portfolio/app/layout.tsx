"use client";

import { useEffect } from "react";
import "./global.css";

import Navigation from "./Navigation";

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
        navbar.style.background = "hsla(0, 0%, 13%, 1)";
      } else {
        navbar.style.background = "hsla(0, 0%, 13%, 0)";
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
        <main className="mb-4">{children}</main>
        <footer className="bg-[#080709] flex flex-col w-full text-center justify-center align-center h-12 z-auto bottom-0 opacity-100">
          <p className="text-sm text-white"> Created by Kaylee Williams </p>
        </footer>
      </body>
    </html>
  );
}

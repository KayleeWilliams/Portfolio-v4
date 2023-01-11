"use client";

import "./global.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrollFunction);
    }
  }, []);

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ) {
      document.getElementById("navbar").style.background = "hsla(270, 12%, 3%, 1)";

    } else {
      document.getElementById("navbar").style.background = "hsla(274, 16%, 14%, 0)";
    }

    if (document.getElementsByClassName("cover-bg").length > 0 && (1 - window.scrollY / 500) > 0.2) {
      document.getElementsByClassName("cover-bg")[0].style.opacity = 1 - window.scrollY / 500;
    }
  };

  return (
    <html>
      <body className="bg-[#19161c] flex flex-col">
        <div
          id="navbar"
          className="flex flex-row fixed gap-8 text-sm font-[500] tracking-wider uppercase text-white pl-32 py-4 w-full z-50 top-0"
        >
          <Link href="/" className="flex flex-row items-center gap-1 group">
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
              />
            </svg>
            <p className="group-hover:opacity-70 ease-in-out duration-300 delay-100">
              Home
            </p>
          </Link>
          <Link
            href="/projects"
            className="flex flex-row items-center gap-1 group"
          >
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m.12 13.5l3.74 3.74l1.42-1.41l-2.33-2.33l2.33-2.33l-1.42-1.41l-3.74 3.74m11.16 0l-3.74-3.74l-1.42 1.41l2.33 2.33l-2.33 2.33l1.42 1.41l3.74-3.74Z"
              />
            </svg>
            <p className="group-hover:opacity-70 ease-in-out duration-300 delay-100">
              My Projects
            </p>
          </Link>
        </div>

        <main>{children}</main>
      </body>
    </html>
  );
}

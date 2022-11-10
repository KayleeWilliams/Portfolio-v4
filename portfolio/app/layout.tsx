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
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("navbar").style.background ="hsla(274, 16%, 14%, 1)";
    } else {
      document.getElementById("navbar").style.opacity ="hsla(274, 16%, 14%, 0)";
    }
  }

  return (
    <html>
      <head></head>
      <body className="bg-[#241E29] flex flex-col">
        <div
          id="navbar"
          className="flex flex-row fixed gap-8 text-base font-medium text-white pl-32 py-4 w-full z-10 top-0"
        >
          <Link href="/"> About Me </Link>
          <Link href="/"> My Projects </Link>
        </div>

        <main>{children}</main>
      </body>
    </html>
  );
}

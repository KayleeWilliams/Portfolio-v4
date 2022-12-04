"use client";

// Import Swiper React components
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function External(props: any) {
  const external = props.data.External;
  const main = props.data.MainButton;

  return (
    <>
      {external != null && main == "External" && (
        <Link
          href={external}
          className="bg-white text-black px-6 h-14 text-base tracking-wider flex flex-row font-black gap-3 w-fit items-center rounded hover:opacity-60 ease-in-out duration-300"
          target="_blank"
        >
          <svg width="32px" height="32px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4Z"
            ></path>
          </svg>
          <p>ONLINE</p>
        </Link>
      )}

      {external != null && main != "External" && (
        <Link
          href={external}
          className="bg-black border-white border-2 text-white w-10 h-10 text-base flex rounded-full justify-center items-center content-center hover:bg-white hover:text-black ease-in duration-300"
          target="_blank"
        >
          <svg width="24px" height="24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4Z"
            ></path>
          </svg>
        </Link>
      )}
    </>
  );
}


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
          className="bg-[#0072d2] text-white px-4 py-4 text-base flex flex-row font-bold gap-1 w-fit rounded hover:bg-[#0082f0]"
          target="_blank"
        >
          <svg width="24px" height="24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4Z"
            ></path>
          </svg>
          <p>View Externally</p>
        </Link>
      )}

      {external != null && main != "External" && (
        <Link
          href={external}
          className="bg-[#0072d2] text-white p-2 text-base flex rounded-full hover:bg-[#0082f0] justify-center content-center h-min"
          target="_blank"
        >
          <svg width="36px" height="36px" viewBox="0 0 24 24">
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


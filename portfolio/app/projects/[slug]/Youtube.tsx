"use client";

// Import Swiper React components
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Youtube(props: any) {
  const youtube = props.data.Youtube;
  const main = props.data.MainButton;

  return (
    <>
      {youtube != null && main == "Youtube" && (
        <Link
          href={youtube}
          className="bg-white text-black px-6 h-14 text-base tracking-wider flex flex-row font-black gap-3 w-fit items-center rounded hover:opacity-60 ease-in-out duration-300"
          target="_blank"
        >
          <svg width="32px" height="32px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"
            ></path>
          </svg>
          <p>View on Youtube</p>
        </Link>
      )}

      {youtube != null && main != "Youtube" && (
        <Link
          href={youtube}
          className="bg-black border-white border-2 text-white w-10 h-10 text-base flex rounded-full justify-center items-center content-center hover:bg-white hover:text-black ease-in duration-300"
          target="_blank"
        >
          <svg width="24px" height="24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"
            ></path>
          </svg>
        </Link>
      )}
    </>
  );
}


// Import Swiper React components
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ExternalButton(props: any) {
  const button = props.data;
  const type = props.type;
  const main = props.isMain;

  return (
    <>
      {main && (
        <Link
          href={button}
          className="bg-white text-black px-6 h-14 text-2xl lg:text-base tracking-wider flex flex-row font-black gap-3 w-fit items-center rounded hover:opacity-60 ease-in-out duration-300"
          target="_blank"
        >
          <div className="w-10 h-10 lg:w-8 lg:h-8">
            <svg width="100%" height="100%" viewBox="0 0 24 24">
              {type == "Github" && (
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                ></path>
              )}
              {type == "Youtube" && (
                <path
                  fill="currentColor"
                  d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"
                ></path>
              )}
              {type == "External" && (
                <path
                  fill="currentColor"
                  d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4Z"
                ></path>
              )}
            </svg>
          </div>
          {type == "Github" && <p> VIEW ON GITHUB </p>}
          {type == "Youtube" && <p> WATCH ON YOUTUBE </p>}
          {type == "External" && <p> VIEW DEMO </p>}
        </Link>
      )}

      {!main && (
        <Link
          href={button}
          className="bg-black border-white border-2 text-white w-14 h-14 lg:w-10 lg:h-10 text-base flex rounded-full justify-center items-center content-center hover:bg-white hover:text-black ease-in duration-300"
          target="_blank"
        >
          <div className="w-12 h-12 lg:w-8 lg:h-8">
            <svg width="100%" height="100%" viewBox="0 0 24 24">
              {type == "Github" && (
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                ></path>
              )}
              {type == "Youtube" && (
                <path
                  fill="currentColor"
                  d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"
                ></path>
              )}
              {type == "External" && (
                <path
                  fill="currentColor"
                  d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4Z"
                ></path>
              )}
            </svg>
          </div>
        </Link>
      )}
    </>
  );
}
      
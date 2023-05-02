import React from "react";
import Image from "next/image";
import Link from "next/link";

// Import Icons
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

export default function ExternalButton(props: any) {
  const button = props.data;
  const type = props.type;
  const main = props.isMain;

  return (
    <>
      {main && (
        <Link
          href={button}
          className="bg-white text-black px-3 h-14 lg:px-6 lg:h-14 text-sm lg:text-lg tracking-wider flex flex-row font-black gap-3 w-fit items-center rounded hover:bg-opacity-60 ease-in duration-300"
          target="_blank"
        >
          <div className="w-8 h-8 lg:w-10 lg:h-10">
            {type == "Github" && <AiFillGithub className="w-full h-full" />}
            {type == "Youtube" && <AiFillYoutube className="w-full h-full" />}
            {type == "External" && <BiLinkExternal className="w-full h-full" />}
          </div>

          {type == "Github" && <p> VIEW ON GITHUB </p>}
          {type == "Youtube" && <p> WATCH ON YOUTUBE </p>}
          {type == "External" && <p> VIEW DEMO </p>}
        </Link>
      )}

      {!main && (
        <Link
          href={button}
          className="bg-black border-white border-2 text-white w-14 h-14 lg:w-12 lg:h-12 text-base flex rounded-full justify-center items-center content-center hover:bg-white hover:text-black ease-in-out duration-300"
          target="_blank"
        >
          <div className="w-8 h-8">
            {type == "Github" && <AiFillGithub className="w-full h-full" />}
            {type == "Youtube" && <AiFillYoutube className="w-full h-full" />}
            {type == "External" && <BiLinkExternal className="w-full h-full" />}
          </div>
        </Link>
      )}
    </>
  );
}
      
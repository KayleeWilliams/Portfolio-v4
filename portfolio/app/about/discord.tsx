"use client";

import { BsDiscord } from "react-icons/bs";

interface Props {
  discord: string;
}

export default function Discord(props: Props) {

  return (
    <>
      <button
        className="bg-c-2 text-c-3 hover:text-c-2 hover:bg-c-3 items-center flex flex-row gap-2 text-xl font-medium px-4 py-2 rounded-lg w-max transition delay-75 ease-in-out duration-300"
        onClick={() => {
          navigator.clipboard.writeText(props.discord);
        }}
      >
        <BsDiscord className="w-8 h-8" />
        <p className="h-fit">{props.discord}</p>
      </button>
    </>
  );
}

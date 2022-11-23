// import Select from "react-select";
"use client";
import { useState } from "react";

export default function Dropdown({data, selected, setSelected}: any) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex flex-row items-center justify-center rounded-2xl text-white h-[36px] w-fit px-4 select-none bg-[#34363D] hover:bg-[#0E0F16]"
      >
        {selected ? (
          <p> {data[selected - 1].attributes.Name} </p>
        ) : (
          <p> All </p>
        )}

        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"
          />
        </svg>
      </div>

      {dropdownOpen && (
        <div className="bg-[#131313] w-fit flex flex-col gap-2 fixed z-50 py-2 mt-4 select-none rounded-lg">
          <div
            className={`${
              dropdownOpen ? "visible" : "invisible"
            } text-white w-full hover:bg-[#2A2A2A] px-8`}
            onClick={() => setSelected(null)}
          >
            <p> All </p>
          </div>

          {data.map((technology: any) => (
            <div
              key={technology.id}
              onClick={() => setSelected(technology.id)}
              className={`${dropdownOpen ? "visible" : "invisible"} 
              ${selected == technology.id ? "font-medium" : "font-base"} 
              text-white w-full hover:bg-[#2A2A2A] px-8`}
            >
              <p> {technology.attributes.Name} </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// import Select from "react-select";
"use client";
import { useState } from "react";

export default function Dropdown({data, selected, setSelected}: any) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex flex-row items-center justify-center rounded-xl text-white gap-2 bg-[#34363D] hover:bg-[#0E0F16] text-2xl w-max px-4 py-1 select-none"
      >
        {selected ? (
          <p> {data[selected - 1].attributes.Name} </p>
        ) : (
          <p> All </p>
        )}

        <svg className="w-8 h-8" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"
          />
        </svg>
      </div>

      {dropdownOpen && (
        <div className="bg-[#131313] w-fit flex flex-col gap-2 fixed z-50 py-2 mt-4 select-none rounded-lg">
          <div
            onClick={() => setSelected(null)}
            className={`${dropdownOpen ? "visible" : "invisible"} 
              ${
                selected == null ? "font-medium px-3" : "font-base px-8"
              } text-white w-full hover:bg-[#2A2A2A] flex flex-row items-center`}
          >
            {selected == null && (
              <div className="bg-white w-2 h-2 rounded-full mr-3" />
            )}

            <p> All </p>
          </div>

          {data.map((technology: any) => (
            <div
              key={technology.id}
              onClick={() => setSelected(technology.id)}
              className={`${dropdownOpen ? "visible" : "invisible"} 
              ${
                selected == technology.id
                  ? "font-medium px-3"
                  : "font-base px-8"
              } 
              text-white w-full hover:bg-[#2A2A2A] flex flex-row items-center`}
            >
              {selected == technology.id && (
                <div className="bg-white w-2 h-2 rounded-full mr-3" />
              )}

              <p> {technology.attributes.Name} </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

"use client";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

interface Technology {
  id: number;
  attributes: {
    Name: string;
    Category: boolean;
    projects: {
      data: Array<Object>;
    };
  };
}

interface Props {
  data: Array<Technology>;
  selected: number | null;
  setSelectedOption: Function;
}

export default function Dropdown({ data, selected, setSelectedOption}: Props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  console.log(data[0].attributes.Name)

  return (
    <div>
      <div
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex flex-row items-center justify-center rounded-lg text-white gap-2 bg-c-4 hover:bg-[#817280] text-xl w-max px-4 py-1 select-none"
      >
        {selected ? (
          <p> {data.find((tech) => tech.id == (selected))?.attributes.Name} </p>
        ) : (
          <p> All </p>
        )}

        <AiFillCaretDown />
      </div>

      {dropdownOpen && (
        <div className="bg-c-4 w-fit flex flex-col gap-2 fixed z-50 py-2 mt-4 select-none rounded-lg">
          <div
            onClick={() => setSelectedOption(null)}
            className={`${dropdownOpen ? "visible" : "invisible"} 
              ${
                selected == null
                  ? "font-medium font-base px-3"
                  : "font-base px-8"
              }
              text-white w-full hover:bg-c-2 hover:text-c-3 hover:font-semibold flex flex-row items-center group transition ease-in-out delay-75 duration-150`}
          >
            {selected == null && (
              <div className="bg-white group-hover:bg-c-3 w-2 h-2 rounded-full mr-3 transition ease-in-out delay-75 duration-150" />
            )}

            <p> All </p>
          </div>

          {data.map((technology: any) => (
            <div
              key={technology.id}
              onClick={() => setSelectedOption(technology.id)}
              className={`${dropdownOpen ? "visible" : "invisible"} 
              ${
                selected == technology.id
                  ? "font-medium px-3"
                  : "font-base px-8"
              } 
              text-white w-full hover:bg-c-2 hover:text-c-3 hover:font-semibold flex flex-row items-center group transition ease-in-out delay-75 duration-150`}
            >
              {selected == technology.id && (
                <div className="bg-white group-hover:bg-c-3 w-2 h-2 rounded-full mr-3 transition ease-in-out delay-75 duration-150" />
              )}

              <p> {technology.attributes.Name} </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

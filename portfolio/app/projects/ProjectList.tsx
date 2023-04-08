// import Select from "react-select";
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Dropdown from "./Dropdown";
import "./projects.css";

export default function ProjectList(props: any) {
  const projects = props.data.projects;
  const technologies = props.data.technologies;

  const [selectedOption, setSelectedOption] = useState(null);

  function setSelected(id: any) {
    setSelectedOption(id);
  };
  
  return (
    <div className="w-screen px-16 mt-32 lg:mt-16 flex flex-col gap-8">
      <div className="flex flex-row gap-8 items-center">
        <h1 className="text-white font-bold text-6xl lg:text-5xl">
          My Projects
        </h1>
        <Dropdown
          data={technologies}
          selected={selectedOption}
          setSelected={setSelected}
        />
      </div>

      <div className="grid grid-rows-auto grid-cols-1 gap-4 lg:grid-cols-3 align-center w-full">
        {selectedOption != null &&
          technologies
            .find((technology: any) => technology.id === selectedOption)
            .attributes.projects.data.slice(0)
            .reverse()
            .map((project: any) => (
              <Link
                href={`/projects/${project.attributes.Slug}`}
                key={project.id}
                className="relative w-full pt-[56.25%]"
              >
                <Image
                  src={`http://localhost:1337${project.attributes.Thumbnail.data.attributes.url}`}
                  alt={project.attributes.Title}
                  fill
                />
              </Link>
            ))}

        {selectedOption == null &&
          projects.map((project: any) => (
            <Link
              href={`/projects/${project.attributes.Slug}`}
              key={project.id}
              className="relative w-full pt-[56.25%]"
            >
              <Image
                src={`http://localhost:1337${project.attributes.Thumbnail.data.attributes.url}`}
                alt={project.attributes.Title}
                fill
              />
            </Link>
          ))}

        <div>
          {selectedOption != null &&
            technologies.find(
              (technology: any) => technology.id === selectedOption
            ).attributes.projects.data.length === 0 && (
              <div className="text-white pl-6 text-xl font-medium">
                <p>No projects found.</p>
              </div>
            )}
          {selectedOption == null && projects.length === 0 && (
            <div className="text-white pl-6 text-xl font-medium">
              <p>No projects found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

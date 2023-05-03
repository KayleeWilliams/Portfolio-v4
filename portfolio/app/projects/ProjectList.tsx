// import Select from "react-select";
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Dropdown from "./Dropdown";
import "./projects.css";

interface Props {
  data: {
    projects: Array<Object>;
    technologies: Array<Technology>;
    host: string;
  };
}

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

export default function ProjectList(props: Props) {
  const projects = props.data.projects;
  const technologies = props.data.technologies;
  const host = props.data.host;

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="w-screen px-8 lg:px-16 mt-16 flex flex-col gap-8">
      <div className="flex flex-row gap-8 items-end">
        <h1 className="text-white font-bold text-3xl lg:text-5xl">
          My Projects
        </h1>
        <Dropdown
          data={technologies}
          selected={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>

      <div className="grid grid-rows-auto grid-cols-1 gap-4 lg:grid-cols-3 align-center w-full">
        {selectedOption != null &&
          technologies
            .find((technology: Technology) => technology.id === selectedOption)
            ?.attributes?.projects?.data.slice(0)
            .reverse()
            .map((project: any) => (
              <Link
                key={project}
                href={`projects/${project.attributes.Slug}`}
                className="relative"
              >
                <div className="w-full h-full aspect-video">
                  <Image
                    src={`${host}${project.attributes.Thumbnail.data.attributes.url}`}
                    alt={project.attributes.Title}
                    fill
                    className="transition ease-in-out delay-150 border-4 border-transparent hover:-translate-y-1 hover:border-white duration-300"
                  />
                </div>
              </Link>
            ))}

        {selectedOption == null &&
          projects.map((project: any) => (
            <Link
              key={project}
              href={`projects/${project.attributes.Slug}`}
              className="relative"
            >
              <div className="w-full h-full aspect-video">
                <Image
                  src={`${host}${project.attributes.Thumbnail.data.attributes.url}`}
                  alt={project.attributes.Title}
                  fill
                  className="transition ease-in-out delay-150 border-4 border-transparent hover:-translate-y-1 hover:border-white duration-300"
                />
              </div>
            </Link>
          ))}

        <div>
          {selectedOption != null &&
            technologies.find(
              (technology: Technology) => technology.id === selectedOption
            )?.attributes.projects?.data.length === 0 && (
              <div className="text-white text-xl font-medium">
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

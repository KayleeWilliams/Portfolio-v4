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
    <div className="w-screen flex-shrink-0 px-16 mt-16 flex flex-col gap-8">
      <div className="flex flex-row gap-4 items-center content-center">
        <h1 className="text-white font-bold text-5xl">My Projects</h1>
        <Dropdown
          data={technologies}
          selected={selectedOption}
          setSelected={setSelected}
        />
      </div>
      <div className="flex flex-row flex-wrap align-center w-full ml-[-20px]">
        {selectedOption != null &&
          technologies
            .find((technology: any) => technology.id === selectedOption)
            .attributes.projects.data.slice(0)
            .reverse()
            .map((project: any) => (
              <Link
                href={`/projects/${project.attributes.Slug}`}
                key={project.id}
                className="project"
              >
                <div className="project-container">
                  <Image
                    src={`http://localhost:1337${project.attributes.Thumbnail.data.attributes.url}`}
                    alt={project.attributes.Title}
                    fill
                  />
                </div>
              </Link>
            ))}

        {selectedOption == null &&
          projects.map((project: any) => (
            <Link
              href={`/projects/${project.attributes.Slug}`}
              key={project.id}
              className="project"
            >
              <div className="project-container">
                <Image
                  src={`http://localhost:1337${project.attributes.Thumbnail.data.attributes.url}`}
                  alt={project.attributes.Title}
                  fill
                />
              </div>
            </Link>
          ))}

        <div>
          {selectedOption != null &&
            technologies.find((technology: any) => technology.id === selectedOption).attributes.projects.data.length === 0 && ( 
            <div className="text-white pl-6 text-xl font-medium"><p>No projects found.</p></div>
            )}
          {selectedOption == null && projects.length === 0 && (
            <div className="text-white pl-6 text-xl font-medium"><p>No projects found.</p></div>
          )}
        </div>
        
      </div>
    </div>
  );
}

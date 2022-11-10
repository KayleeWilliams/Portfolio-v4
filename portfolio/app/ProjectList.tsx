import React from "react";
import ProjectCarousel from "./ProjectCarousel";

export default function ProjectList(props: any) {
  const technologies = props.data;

  return (
    <div className="flex flex-col gap-4">
      {technologies.map((technology: any) => (
        <div key={technology.id} className="flex flex-col gap-2">
          <h1 className="text-white font-bold text-xl">
            {technology.attributes.Name} Projects
          </h1>
          <ProjectCarousel data={technology.attributes.projects.data} />
        </div>
      ))}
    </div>
  );
}

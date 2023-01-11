import React from "react";
import ProjectCarousel from "./ProjectCarousel";

export default function ProjectList(props: any) {
  const technologies = props.data;

  return (
    <div>
      {technologies.map((technology: any) => (
        <div key={technology.id}>
          {technology.attributes.projects.data.length > 0 &&
            technology.attributes.Category && (
              <div className="flex flex-col mb-2">
                <h1 className="text-white font-bold text-xl">
                  {technology.attributes.Name} Projects
                </h1>
                <ProjectCarousel
                  data={technology.attributes.projects.data.reverse()}
                />
              </div>
            )}
        </div>
      ))}
    </div>
  );
}

import React from "react";
import ProjectCarousel from "./ProjectCarousel";

export default function ProjectList(props: any) {
  const technologies = props.data;

  // For each project add the host
  technologies.map((technology: any) => {
    technology.attributes.projects.data.map((project: any) => {
      project.attributes.Thumbnail.data.attributes.url = `${process.env.HOST}${project.attributes.Thumbnail.data.attributes.url}`;
    });
  });
  
  return (
    <div>
      {technologies.map((technology: any) => (
        <div key={technology.id} className="mb-4">
          {technology.attributes.projects.data.length > 0 &&
            technology.attributes.Category && (
              <div className="flex flex-col mb-2">
                <h1 className="text-white font-bold text-3xl lg:text-xl tracking-wider">
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

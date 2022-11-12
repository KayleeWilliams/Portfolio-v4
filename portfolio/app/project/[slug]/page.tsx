import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import "./Project.css";

import Github from "./Github";
import Youtube from "./Youtube";
import External from "./External";


export default async function Home({params}) {
  // params.slug
  async function fetch(url: string) {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    });
    return response.data.data;
  }

  const project: object = await fetch(`http://localhost:1337/api/projects/${params.slug}?populate=%2A`);

  let projectDate: any = new Date(project.attributes.Date);
  projectDate = projectDate.toLocaleString("en-GB", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  // Get a string of all the technologies used in the project separated by a comma
  let technologiesList: string = "";

  project.attributes.technologies.data.map(
    (technology: any, index: number) =>
      (technologiesList +=
        technology.attributes.Name +
        (index < project.attributes.technologies.data.length - 1 ? ", " : ""))
  );

  return (
    <div className="w-full h-full text-white">
      <article className="flex flex-col relative h-screen">
        {/* Display content over a fixed background of Next  Image http://localhost:1337${project.attributes.Cover.data.attributes.url} */}
        <div className="cover-bg w-full h-full"></div>

        <style jsx>
          {`
            .cover-bg {
              background-image: radial-gradient(
                  farthest-side at 73% 21%,
                  transparent,
                  rgb(26, 29, 41)
                ),
                url(http://localhost:1337${project.attributes.Cover.data
                  .attributes.url});
              background-size: cover;
              background-position: center;
              width: 100%;
              position: fixed;
            }
          `}
        </style>

        <div className="mt-64 ml-8 z-40 flex flex-col gap-8">
          <h1 className="text-5xl font-bold"> {project.attributes.Title} </h1>
          <div className="flex flex-col text-sm">
            <p> {projectDate} </p>
            <p> {technologiesList} </p>
          </div>

          <div className="flex flex-row gap-4 content-center">
            <Github data={project.attributes} />
            <Youtube data={project.attributes} />
            <External data={project.attributes} />
          </div>

          <p className="text-xl w-[64%]">{project.attributes.Description}</p>
        </div>
      </article>
    </div>
  );
}

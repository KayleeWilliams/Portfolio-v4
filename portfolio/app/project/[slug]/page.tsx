import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import "./Project.css";

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

          {project.attributes.Github != null && (
            <Link
              href={project.attributes.Github}
              className="bg-[#0072d2] text-white px-4 py-4 text-base flex flex-row font-bold gap-1 w-fit rounded hover:bg-[#0082f0]"
              target="_blank"
            >
              <svg width="24px" height="24px" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                ></path>
              </svg>
              <p>View on Github</p>
            </Link>
          )}

          <p className="text-xl w-[64%]">
            {project.attributes.Description}
          </p>
        </div>
      </article>
    </div>
  );
}

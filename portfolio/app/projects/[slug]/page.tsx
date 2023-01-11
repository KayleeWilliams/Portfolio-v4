import Image from "next/image";
import ExternalButton from "./ExternalButton";
import dotenv from "dotenv";
dotenv.config();

import "./Project.css";

async function getProject(params: any) {
  const url = `http://localhost:1337/api/projects?filters[slug][$eq]=${params.slug}&populate[technologies][populate]=%2A&populate[Cover][populate]=%2A`; 
  const res: any = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  }).then((res) => res.json());

  return res.data[0];
}

export default async function Home({params}: any) {
  const project: any = await getProject(params);

  let projectDate: any = new Date(project.attributes.Date);
  projectDate = projectDate.toLocaleString("en-GB", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  let technologiesList: string = "";

  project.attributes.technologies.data.map((technology: any, index: number) => {
    technologiesList += technology.attributes.Name + (index < project.attributes.technologies.data.length - 1 ? ", " : "");
  });

  // Get the main button & sort it so it appears first.
  const mainButton = project.attributes.MainButton;
  
  const buttonTypes = [
    { type: "Github" },
    { type: "Youtube" },
    { type: "External" },
  ].sort((a, b) =>
    a.type === mainButton ? -1 : b.type === mainButton ? 1 : 0
  );

  return (
    <div className="w-full h-full text-white">
      <title>{`${project.attributes.Title} | Kaylee's Portfolio`}</title>

      <article className="flex flex-col relative h-screen">
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
        
        <div className="mt-64 page-content">
          <div className="flex flex-col gap-8 mb-4">
            <h1 className="text-5xl font-bold"> {project.attributes.Title} </h1>
          </div>

          <div className="mb-14 flex flex-col w-[60%] z-40">
            <div className="text-sm">
              <p className="mb-1"> {projectDate} </p>
              <p> {technologiesList} </p>
            </div>

            <div className="flex flex-row gap-4 content-center items-center ml-1 mt-7">
              {buttonTypes.map(({ type }) => {
                const data = project.attributes[type];
                if (!data) return null;
                return (
                  <ExternalButton data={data} isMain={type === mainButton} type={type} key={type} />
                );
              })}
            </div>

            <p className="text-xl py-4">{project.attributes.Summary}</p>
          </div>

          <div className="">
            <div className="border-b-2 border-[#F9F9F9]/20 mb-2">
              <h2 className="mb-4 text-xl font-semibold tracking-[2px] text-[#cacaca]">
                DETAILS
              </h2>
            </div>

            <h1 className="font-bold text-2xl mb-6">
              {project.attributes.Title}
            </h1>
            <div className="grid grid-cols-2 mb-64">
              <p className="text-base pr-4">{project.attributes.Description}</p>
              <div className="pb-4">
                <p className="text-[#cacaca] text-base mb-1"> Technologies: </p>
                {project.attributes.technologies.data.map(
                  (technology: any, index: number) => (
                    <div key="index" className="flex flex-row gap-2 mb-4">
                      <Image
                        src={`${technology.attributes.IconUrl}?color=%23ffffff`}
                        alt={technology.attributes.Name}
                        width={24}
                        height={24}
                      />

                      <p className="text-base">{technology.attributes.Name}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );};
import Image from "next/image";
import { redirect } from "next/navigation";


import ExternalButton from "./ExternalButton";

async function getProject(slug: string) {
  const url = `${process.env.HOST}/api/projects?filters[slug][$eq]=${slug}&populate[Logo][populate]=%2A&populate[Cover][populate]=%2A&populate[Thumbnail][populate]=%2A&populate[technologies][populate]=Icon`;

  const res: any = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    next: { revalidate: 300 }
  }).then((res) => res.json());

  
  return res.data[0];
}

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const project: any = await getProject(params.slug);

  // Check if project exists and redirect if not.
  if (typeof project === "undefined") {
    redirect("/projects");
  } 

  else {
    return {
      title: `${project.attributes.Title} | Kaylee's Portfolio`,
      description: project.attributes.Summary,
      openGraph: {
        title: `${project.attributes.Title} | Kaylee's Portfolio`,
        description: project.attributes.Summary,
        images: [
          {
            url: `${process.env.HOST}${project.attributes.Thumbnail.data.attributes.url}`,
            alt: project.attributes.Title,
          },
        ],
        url: `https://kayleewilliams.dev/projects/${project.attributes.Slug}`,
      }
    };
  }
}

export default async function Home({ params }: Props) {
  const project: any = await getProject(params.slug);

  let projectDate: any = new Date(project.attributes.Date);
  projectDate = projectDate.toLocaleString("en-GB", {
    year: "numeric",
    // month: "numeric",
    // day: "numeric",
  });

  let technologiesList: string = "";

  project.attributes.technologies.data.map((technology: any, index: number) => {
    technologiesList +=
      technology.attributes.Name +
      (index < project.attributes.technologies.data.length - 1 ? ", " : "");
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
      <div className="w-full h-3/4 lg:h-full cover-bg fixed">
        <Image
          src={`${process.env.HOST}${project.attributes.Cover.data.attributes.url}`}
          alt={`${project.attributes.Title} Cover`}
          className="object-cover object-center"
          priority={true}
          fill
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(farthest-side at 73% 21%, transparent, rgb(7, 3, 7))",
            zIndex: "10",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      <article className="flex flex-col relative min-h-screen">
        <div className="z-10 px-4 lg:px-20">
          <div className="flex flex-col gap-8 mb-2 lg:mb-4">
            {/* If logo is an attribute not null  */}
            {project.attributes.Logo.data != null ? (
              <div className="lg:w-[35vw] min-w-[100px] max-w-[341px] min-h-[170px] mt-32 flex relative">
                <Image
                  src={`${process.env.HOST}${project.attributes.Logo.data.attributes.url}`}
                  alt={project.attributes.Title}
                  fill
                />
              </div>
            ) : (
              <h1 className="text-3xl lg:text-5xl font-bold mt-64">
                {project.attributes.Title}
              </h1>
            )}
          </div>

          <div className="mb-14 flex flex-col w-full lg:w-[60%] z-40">
            <div className="text-sm lg:text-base">
              <p className="mb-1"> {projectDate} </p>
              <p> {technologiesList} </p>
            </div>

            <div className="flex flex-row gap-2 lg:gap-4 content-center items-center mt-7">
              {buttonTypes.map(({ type }) => {
                const data = project.attributes[type];
                if (!data) return null;
                return (
                  <ExternalButton
                    data={data}
                    isMain={type === mainButton}
                    type={type}
                    key={type}
                  />
                );
              })}
            </div>

            <p className="text-lg lg:text-xl py-4">
              {project.attributes.Summary}
            </p>
          </div>

          <div className="">
            <div className="border-b-2 border-[#F9F9F9]/20 mb-2">
              <h2 className="mb-4 text-xl lg:text-xl font-semibold tracking-[2px] text-[#cacaca]">
                DETAILS
              </h2>
            </div>

            <h1 className="font-bold text-2xl lg:text-2xl mb-6">
              {project.attributes.Title}
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 mb-64 gap-4">
              <p className="text-base">{project.attributes.Description}</p>
              <div className="pb-4 text-base lg:text-base">
                <p className="text-[#cacaca] mb-2 lg:mb-1"> Technologies: </p>
                {project.attributes.technologies.data.map(
                  (technology: any, index: number) => (
                    <div
                      key="index"
                      className="flex flex-row gap-2 mb-2 lg:mb-4"
                    >
                      {technology.attributes.Icon.data != null ? (
                        <div className="w-6 h-6 relative text-white">
                          <Image
                            src={`${process.env.HOST}${technology.attributes.Icon.data.attributes.url}`}
                            alt={technology.attributes.Name}
                            style={{
                              filter:
                                "invert(100%) sepia(100%) hue-rotate(180deg)",
                            }}
                            fill
                          />
                        </div>
                      ) : (
                        <div />
                      )}
                      <p>{technology.attributes.Name}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

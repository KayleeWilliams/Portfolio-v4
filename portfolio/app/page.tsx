import HeroCarousel from "./HeroCarousel";
import ProjectCarousel from "./ProjectCarousel";
import ProjectList from "./ProjectList";
import Loading from "./loading";
import { Suspense } from "react";


async function getData(url: string) {
  const res: any = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    next: { revalidate: 300 },
  }).then((res) => res.json());

  return res.data;
}

export default async function Home() {
  const banners: any = await getData(
    `${process.env.HOST}/api/fields?populate=%2A`
  );
  let projects: any = await getData(
    `${process.env.HOST}/api/projects?populate=%2A&sort=Date:desc`
  );
  var technologies: any = await getData(
    `${process.env.HOST}/api/technologies?populate=projects.Thumbnail&populate=projects.Slug`
  );

  // Sort technologies by number of projects.
  technologies = technologies.sort((a: any, b: any) => {
    return (
      b.attributes.projects.data.length - a.attributes.projects.data.length
    );
  });

  // Add host to project thumbnail
  projects.map((project: any) => {
    project.attributes.Thumbnail.data.attributes.url = `${process.env.HOST}${project.attributes.Thumbnail.data.attributes.url}`
  });

  // Add host to banner images
  banners.map((banner: any) => {
    banner.attributes.Cover.data.attributes.url = `${process.env.HOST}${banner.attributes.Cover.data.attributes.url}`;
  });

  return (
    <div className="w-screen flex-shrink-0 px-4 lg:px-16 mt-16 flex flex-col gap-4 lg:gap-12">
      <Suspense fallback={<Loading />}>
        <HeroCarousel data={banners} />
      </Suspense>

      <div className="flex flex-col gap-1 lg:gap-4 mb-8">
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-base lg:text-xl tracking-wider">
            All Projects
          </h1>
          <ProjectCarousel data={projects} />
        </div>
        <ProjectList data={technologies} />
      </div>
    </div>
  );
}

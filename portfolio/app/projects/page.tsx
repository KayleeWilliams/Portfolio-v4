import ProjectList from "./ProjectList";
import { Metadata } from "next";
import "./projects.css";

export const metadata: Metadata = {
  title: "Projects | Kaylee's Portfolio",
  openGraph: {
    title: "Projects | Kaylee's Portfolio",
  },
};

async function getData(url: string) {
  const res: any = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  }).then((res) => res.json());

  return res.data;
}

export default async function Projects() {
  const projects: any = await getData(
    `${process.env.HOST}/api/projects?populate=%2A&sort=Date:desc`
  );

  const technologies: any = await getData(
    `${process.env.HOST}/api/technologies?populate=projects.Thumbnail`
  );

  const host: string = process.env.HOST as string;

  return (
    <ProjectList data={{ projects, technologies, host }} />
  );
}

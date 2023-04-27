import ProjectList from "./ProjectList";

import "./projects.css";

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
    `${process.env.HOST}/api/projects?populate=%2A&sort=id:desc`
  );

  const technologies: any = await getData(
    `${process.env.HOST}/api/technologies?populate=projects.Thumbnail`
  );

  const host: string = process.env.HOST as string;

  return (
    <div>
      <title> Projects | Kaylee's Portfolio </title>
      <main>
        <ProjectList data={{ projects, technologies, host }} />
      </main>
    </div>
  );
}

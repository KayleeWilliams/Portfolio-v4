// import "server-side";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import dotenv from "dotenv";

import "./projects.css"
dotenv.config();


async function getData(url: string) {
  const res: any = await fetch(
    url,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    }
  ).then((res) => res.json());

  return res.data;
};

export default async function Home() {

  const projects: any = await getData("http://localhost:1337/api/projects?populate=%2A&sort=id:desc");
  const technologies: any = await getData("http://localhost:1337/api/technologies?populate=projects.Thumbnail");

  return (
    <div>
      <main>
        <div className="w-screen flex-shrink-0 px-16 mt-16 flex flex-col gap-8">
          <h1 className="text-white font-bold text-5xl">My Projects</h1>
          <div className="flex flex-row flex-wrap align-center w-full ml-[-20px]">
            {projects.map((project: any) => (
              <Link
                href={`/projects/${project.id}`}
                key={project.id}
                className="project"
              >
                <div className="project-container">
                  <Image
                    src={`http://localhost:1337${project.attributes.Thumbnail.data.attributes.url}`}
                    alt={project.attributes.Title}
                    fill
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

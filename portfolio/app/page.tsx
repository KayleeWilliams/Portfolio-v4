// import "server-side";
import React from "react";
import Head from "next/head";
import dotenv from "dotenv";
import HeroCarousel from "./HeroCarousel";
import ProjectCarousel from "./ProjectCarousel";
import ProjectList from "./ProjectList";

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
  const banners: object = await getData("http://localhost:1337/api/fields?populate=%2A");
  const projects: any = await getData("http://localhost:1337/api/projects?populate=%2A&sort=id:desc");
  const technologies: any = await getData("http://localhost:1337/api/technologies?populate=projects.Thumbnail&populate=projects.Slug");

  return (
    <div>
      <title> Kaylee's Portfolio </title>

      <div className="w-screen flex-shrink-0 px-8 mt-16 flex flex-col gap-12">
        <HeroCarousel data={banners} />

        <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-col">
            <h1 className="text-white font-bold text-xl"> All Projects </h1>
            <ProjectCarousel data={projects} />
          </div>

          <ProjectList data={technologies} />
        </div>
      </div>
    </div>
  );
}

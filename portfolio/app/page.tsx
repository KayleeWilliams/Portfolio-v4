// import "server-side";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import dotenv from "dotenv";
import HeroCarousel from "./HeroCarousel";
import ProjectCarousel from "./ProjectCarousel";
import ProjectList from "./ProjectList";

export default async function Home() {

  dotenv.config();

  async function fetch(url: string) {
    const response = await axios.get(url,
      {
        headers: {
          Authorization:
            `Bearer ${process.env.API_KEY}`,
        },
      }
    );
    return response.data.data;
  }

  const banners: object = await fetch("http://localhost:1337/api/fields?populate=%2A");
  const projects: object = await fetch("http://localhost:1337/api/projects?populate=%2A");
  const technologies: any = await fetch("http://localhost:1337/api/technologies?populate=projects.Thumbnail");

  return (
    <div>
      <main>
        <div className="w-screen flex-shrink-0 px-8 mt-16 flex flex-col gap-12">
          <HeroCarousel data={banners} />

          <div className="flex flex-col gap-4 mb-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-white font-bold text-xl"> All Projects </h1>
              <ProjectCarousel data={projects} />
            </div>

            <ProjectList data={technologies} />
          </div>
          </div>
      </main>
    </div>
  );
}

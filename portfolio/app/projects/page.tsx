import React, { use } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import dotenv from "dotenv";

import ProjectList from "./ProjectList";

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

export default async function Projects() {
   const projects: any = await getData(
     "http://localhost:1337/api/projects?populate=%2A&sort=id:desc"
   );

   const technologies: any = await getData(
     "http://localhost:1337/api/technologies?populate=projects.Thumbnail"
   );

  return (
    <div>
      <title> Projects | Kaylee's Portfolio </title>
      <main>
        <ProjectList data={{ projects, technologies }} />
      </main>
    </div>
  );
}

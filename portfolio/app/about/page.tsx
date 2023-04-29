import { remark } from "remark";
import { Metadata } from "next";
import html from "remark-html";
import Contacts from "./contacts";

export const metadata: Metadata = {
  title: "About | Kaylee's Portfolio",
  openGraph: {
    title: "About Kaylee | Kaylee's Portfolio",
  },
};

// Get About section from Strapi
async function getAbout() {
  const url = `${process.env.HOST}/api/about`;
  const res: any = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  }).then((res) => res.json());

  const processedContent = await remark()
    .use(html)
    .process(res.data.attributes.content);
  const content = processedContent.toString();

  return content;
}

export default async function Home() {
  let about: any = await getAbout();

  // Style the about section
  about = about.replace(/<h4/g, "<h3 class='text-xl mt-4 font-medium'");

  return (
    <div className="w-full h-full text-white flex flex-col mt-24 align-center items-center leading-6">
      <div className="bg-c-4 w-4/6 rounded-md px-12 py-8">
        <h1 className="text-3xl mb-1 font-medium tracking-wide"> About Me</h1>
        <div
          className="flex flex-col text-lg"
          dangerouslySetInnerHTML={{ __html: about }}
        ></div>
        <h1 className="text-3xl mb-1 mt-4 font-medium tracking-wide">
          Contact Me
        </h1>
        <p>I am always free to chat so feel free to get in contact with me!</p>
        <Contacts />
      </div>
    </div>
  );
}

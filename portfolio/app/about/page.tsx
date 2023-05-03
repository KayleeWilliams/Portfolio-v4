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

async function getContacts() {
  const url = `${process.env.HOST}/api/contact`;
  const res: any = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  }).then((res) => res.json());

  return res.data.attributes;
}

export default async function Home() {
  let about: any = await getAbout();
  let contacts: any = await getContacts();

  // Style the about section
  about = about.replace(/<h4/g, "<h3 class='text-lg lg:text-xl mt-4 font-medium'");

  return (
    <div className="w-full h-full text-white flex flex-col mt-16 lg:mt-24 align-center items-center leading-6 text-base lg:text-lg">
      <div className="bg-c-4 w-11/12 lg:w-4/6 rounded-md px-6 lg:px-12 py-4 lg:py-8">
        <h1 className="text-2xl lg:text-3xl mb-1 font-medium tracking-wide"> About Me</h1>
        <div
          className="flex flex-col"
          dangerouslySetInnerHTML={{ __html: about }}
        ></div>
        <h1 className="text-2xl lg:text-3xl mb-1 mt-4 font-medium tracking-wide">
          Contact Me
        </h1>
        <p>I am always free to chat so feel free to get in contact with me!</p>
        <Contacts contacts={contacts} />
      </div>
    </div>
  );
}

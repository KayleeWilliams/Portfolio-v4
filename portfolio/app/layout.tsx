import { Metadata } from "next";
import Link from "next/link";
import "./global.css";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsMastodon } from "react-icons/bs";
import Navigation from "./Navigation";

export const metadata: Metadata = {
  title: "Kaylee Williams Portfolio",
  description:
    "Hi, I'm a Software Engineer. This portfolio showcases my past and current projects I have created using a variety of tools and languages.",
  openGraph: {
    title: "Kaylee Williams Portfolio",
    description:
      "Hi, I'm a Software Engineer. This portfolio showcases my past and current projects I have created using a variety of tools and languages.",
    url: "https://kayleewilliams.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-c-0 overflow-x-hidden">
        <Navigation />
        <main className="mb-4 min-h-screen">{children}</main>
        <footer className="bg-c-1 flex flex-row justify-center py-4 w-full text-center align-center z-auto bottom-0 opacity-100">
          <div className="flex flex-row gap-4">
            <Link href="http://github.com/KayleeWilliams" target="_blank">
              <AiFillGithub className="w-8 h-8 text-white hover:text-c-2 transition delay-75 duration-300 ease-in-out hover:-translate-y-1" />
            </Link>
            <Link href="http://linkedin.com/in/kaylee-w/" target="_blank">
              <AiFillLinkedin className="w-8 h-8 text-white hover:text-c-2 transition delay-75 duration-300 ease-in-out hover:-translate-y-1 " />
            </Link>
            <Link
              href="http://mastodon.social/@Kayleew"
              rel="me"
              target="_blank"
            >
              <BsMastodon className="w-8 h-8 text-white hover:text-c-2 transition delay-75 duration-300 ease-in-out hover:-translate-y-1 " />
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}

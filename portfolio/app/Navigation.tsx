import Link from "next/link";
import { AiFillHome, AiOutlineCode, AiOutlineUser } from "react-icons/ai";
import { MdContactPage } from "react-icons/md";

export default function Navigation() {
  return (
    <>
      <div
        id="navbar"
        className="flex flex-row fixed gap-8 text-3xl lg:text-sm font-[500] tracking-wider uppercase text-white pl-32 py-4 w-full z-50 top-0"
      >
        <Link href="/" className="flex flex-row items-center gap-1 group">
          <div className="w-8 h-8 lg:w-4 lg:h-4">
            <AiFillHome className="icon" />
          </div>
          <p className="group-hover:opacity-70 ease-in-out duration-300 delay-100">
            Home
          </p>
        </Link>
        <Link
          href="/projects"
          className="flex flex-row items-center gap-1 group"
        >
          <div className="w-8 h-8 lg:w-4 lg:h-4">
            <AiOutlineCode className="icon" />
          </div>
          <p className="group-hover:opacity-70 ease-in-out duration-300 delay-100">
            My Projects
          </p>
        </Link>
        <Link href="/about" className="flex flex-row items-center gap-1 group">
          <div className="w-8 h-8 lg:w-4 lg:h-4">
            <AiOutlineUser className="icon" />
          </div>
          <p className="group-hover:opacity-70 ease-in-out duration-300 delay-100">
            About Me
          </p>
        </Link>
        <Link href="/cv" className="flex flex-row items-center gap-1 group">
          <div className="w-8 h-8 lg:w-4 lg:h-4">
            <MdContactPage className="icon" />
          </div>
          <p className="group-hover:opacity-70 ease-in-out duration-300 delay-100">
            My CV
          </p>
        </Link>
      </div>
    </>
  );
}

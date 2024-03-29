import Link from "next/link";
import Discord from "./discord";

// Import Icons
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

interface Props {
  contacts: Object;
}

export default function Contacts(props: Props) {
  let contacts: any = props.contacts;
  
  // Add mailto: to email
  if (contacts.Email != "") {
    contacts.Email = "mailto:" + contacts.Email;
  }

  return (
    <>
      <div className="flex flex-col items-center lg:flex-row gap-2 mt-2 leading-none">
        {/* Check if not none  */}
        {contacts.linkedin !== "" && (
          <Link
            href={contacts.LinkedIn}
            target="_blank"
            className="bg-c-2 text-c-3 hover:text-c-2 hover:bg-c-3 items-center flex flex-row gap-2 text-xl font-medium px-4 py-2 rounded-lg w-max transition delay-75 ease-in-out duration-300"
          >
            <AiFillLinkedin className="w-8 h-8" />
            <p className="h-fit"> LinkedIn </p>
          </Link>
        )}

        {contacts.Email !== "" && (
          <Link
            href={contacts.Email}
            target="_blank"
            className="bg-c-2 text-c-3 hover:text-c-2 hover:bg-c-3 items-center flex flex-row gap-2 text-xl font-medium px-4 py-2 rounded-lg w-max transition delay-75 ease-in-out duration-300"
          >
            <AiFillMail className="w-8 h-8" />

            <p className="h-fit"> Email </p>
          </Link>
        )}

        {contacts.Discord !== "" && <Discord discord={contacts.Discord} />}

        {contacts.Github !== "" && (
          <Link
            href={contacts.Github}
            target="_blank"
            className="bg-c-2 text-c-3 hover:text-c-2 hover:bg-c-3 items-center flex flex-row gap-2 text-xl font-medium px-4 py-2 rounded-lg w-max transition delay-75 ease-in-out duration-300"
          >
            <AiFillGithub className="w-8 h-8" />

            <p className="h-fit"> Github </p>
          </Link>
        )}
      </div>
    </>
  );
}

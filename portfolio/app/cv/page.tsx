async function getFiles( url: string ) {
  const res: any = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  });

  return res;
}

async function getCV() {
  const url = `${process.env.HOST}/api/cv?populate=%2A`;
  const res: any = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  }).then((res) => res.json());

  return res;
}

export default async function Home() {
  let cvs: any = await getCV();
  
  return (
    <div className="w-full h-full text-white flex flex-col gap-4 mt-32 align-center items-center text-center">
      <title>{`My CV | Kaylee's Portfolio`}</title>
      <div className="bg-c-4 w-1/2 rounded-md px-12 py-12">
        <h1 className="text-4xl mb-1 font-bold tracking-wide">
          Check out my CV!
        </h1>
        <div className="grid grid-cols-2 w-full h-64 mt-6 rounded-lg text-4xl">
          <a
            href={`${process.env.HOST}${cvs.data.attributes.docx.data.attributes.url}`}
            download
            className="bg-blue-600 hover:bg-blue-800 transition ease-in-out delay-75 duration-300 text-white font-bold flex justify-center items-center rounded-l-md"
          >
            DOCX
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={`${process.env.HOST}${cvs.data.attributes.pdf.data.attributes.url}`}
            download
            className="bg-red-700 hover:bg-red-800 transition ease-in-out delay-75 duration-300 text-white font-bold flex justify-center items-center rounded-r-md"
          >
            PDF
          </a>
        </div>
      </div>
    </div>
  );
}

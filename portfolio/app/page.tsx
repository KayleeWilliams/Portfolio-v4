// Page that says hello world in center 

import React from "react";
import Head from "next/head";
import Carrossel from "./carrossel";

export default function Home() {
  return (
    <html>
      <main>
        <div className="w-full h-screen px-8 mt-16">
          <Carrossel />
        </div>
      </main>
    </html>
  );
}

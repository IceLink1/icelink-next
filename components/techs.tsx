import React from "react";
import Image from "next/image";
import vite from "@/public/icons/vite.svg";
import next from "@/public/icons/nextjs.png";
import react from "@/public/icons/react.png";
import nest from "@/public/icons/nestjs.png";
import js from "@/public/icons/javascript.png";
import ts from "@/public/icons/typescript.png";
import postgres from "@/public/icons/postgresql.png";
import sql from "@/public/icons/sql.png";

import webpack from "@/public/icons/webpack.png";
import aws3 from "@/public/icons/aws3.png";
import expo from "@/public/icons/expo.svg";
import express from "@/public/icons/express.png";

export default function Techs() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Image
        className="max-w-16 min-w-10 min-h-10 max-h-16 object-cover"
        src={vite}
        alt="vite"
      />
      <Image
        className="max-w-16 min-w-10 min-h-10 max-h-16 object-cover"
        src={next}
        alt="next"
      />
      <Image
        className="max-w-16 min-w-10 min-h-10 max-h-16 object-cover"
        src={react}
        alt="react"
      />
      <Image
        className="max-w-16 min-w-10 min-h-10 max-h-16 object-cover"
        src={nest}
        alt="nest"
      />
      <Image
        className="max-w-16 min-w-10 min-h-10 max-h-16 object-cover"
        src={js}
        alt="js"
      />
      <Image
        className="max-w-16 min-w-10 min-h-10 max-h-16 object-cover"
        src={ts}
        alt="ts"
      />
      <Image
        className="max-w-16 min-w-10 min-h-10 max-h-16 object-cover"
        src={postgres}
        alt="postgres"
      />
      <Image
        className="max-w-16 min-w-10 min-h-10 max-h-16 object-cover"
        src={sql}
        alt="sql"
      />
      <Image
        className="max-w-16 min-w-10 min-h-10 max-h-16 object-cover"
        src={webpack}
        alt="webpack"
      />
      <Image
        className="max-w-16 min-w-10 min-h-10 max-h-16 object-cover"
        src={aws3}
        alt="aws3"
      />
      <Image
        className="max-w-16 min-w-10 min-h-10 max-h-16 object-cover"
        src={expo}
        alt="expo"
      />
      <Image
        className="max-w-16 min-w-10 min-h-10 max-h-16 object-cover"
        src={express}
        alt="express"
      />
    </div>
  );
}

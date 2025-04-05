import React from "react";
import Image from "next/image";
import vite from "@/public/icons/vite.jpg";
import next from "@/public/icons/nextjs.png";
import react from "@/public/icons/react.png";
import nest from "@/public/icons/nestjs.png";
import js from "@/public/icons/javascript.png";
import ts from "@/public/icons/typescript.png";
import mongodb from "@/public/icons/mongodb.png";
import postgres from "@/public/icons/postgresql.png";
import prisma from "@/public/icons/prisma.png";
import sql from "@/public/icons/sql.png";

import webpack from "@/public/icons/webpack.png";
import docker from "@/public/icons/docker.png";
import aws3 from "@/public/icons/aws3.png";
import expo from "@/public/icons/expo.png";
import express from "@/public/icons/express.png";

export default function Techs() {
  return (
    <div className="flex gap-3 flex-wrap">
      <Image src={vite} alt="vite" width={55} height={55} />
      <Image src={next} alt="next" width={55} height={55} />
      <Image src={react} alt="react" width={55} height={55} />
      <Image src={nest} alt="nest" width={55} height={55} />
      <Image src={js} alt="js" width={55} height={55} />
      <Image src={ts} alt="ts" width={55} height={55} />
      <Image src={mongodb} alt="mongodb" width={55} height={55} />
      <Image src={postgres} alt="postgres" width={55} height={55} />
      <Image src={prisma} alt="prisma" width={55} height={55} />
      <Image src={sql} alt="sql" width={55} height={55} />
      <Image src={webpack} alt="webpack" width={55} height={55} />
      <Image src={docker} alt="docker" width={55} height={55} />
      <Image src={aws3} alt="aws3" width={55} height={55} />
      <Image src={expo} alt="expo" width={55} height={55} />
      <Image src={express} alt="express" width={55} height={55} />
    </div>
  );
}

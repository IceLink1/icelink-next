import React from "react";
import Image from "next/image";
import next from "@/public/icons/nextjs.png";
import nest from "@/public/icons/nestjs.png";
import ts from "@/public/icons/typescript.png";
import postgres from "@/public/icons/postgresql.png";
import aws3 from "@/public/icons/aws3.png";
import docker from "@/public/icons/docker-icon.svg";
import k8s from "@/public/icons/Kubernetes_logo_without_workmark.svg";
import hibernate from "@/public/icons/Hibernate.svg";
import graphql from "@/public/icons/GraphQL.svg";
import kafka from "@/public/icons/kafka.svg";
import sql from "@/public/icons/sql.svg";
import spring from "@/public/icons/spring-icon.svg";

export default function Techs() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Image
        className="max-w-16 min-w-10 min-h-10 max-h-16 object-cover"
        src={spring}
        alt="webpack"
      />
      <Image
        className="max-w-16 min-w-10 min-h-10 max-h-16 object-cover"
        src={next}
        alt="next"
      />
      <Image
        className="max-w-16 min-w-10 min-h-10 max-h-16 object-cover"
        src={nest}
        alt="next"
      />
      <Image
        className="max-w-16 min-w-10 min-h-10 max-h-16 object-cover"
        src={ts}
        alt="react"
      />

      <Image
        className="max-w-16 min-w-10 min-h-10 max-h-16 object-cover"
        src={graphql}
        alt="nest"
      />
      <Image
        className="max-w-16 min-w-10 min-h-10 max-h-16 object-cover"
        src={sql}
        alt="aws3"
      />
      <Image
        className="max-w-16 min-w-10 min-h-10 max-h-16 object-cover"
        src={hibernate}
        alt="js"
      />
      <Image
        className="max-w-16 min-w-10 min-h-10 max-h-16 "
        src={aws3}
        alt="ts"
      />
      <Image
        className="max-w-16 min-w-10 min-h-10 max-h-16 object-cover"
        src={postgres}
        alt="postgres"
      />
      <Image
        className="max-w-16 min-w-10 min-h-10 max-h-16 object-cover"
        src={kafka}
        alt="express"
      />
      <Image
        className="max-w-16 min-w-10 min-h-10 max-h-16 object-cover"
        src={docker}
        alt="sql"
      />

      <Image
        className="max-w-16 min-w-10 min-h-10 max-h-16 object-cover"
        src={k8s}
        alt="expo"
      />
    </div>
  );
}

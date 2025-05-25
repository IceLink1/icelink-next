"use client";

import { Link } from "@heroui/link";
import cl from "@/pages/index.module.css";
import img from "@/public/images/icelink.jpg";
import alpha from "@/public/icons/alpha.svg";
import beeline from "@/public/images/beeline.png";

import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import React, { useEffect } from "react";
import {
  addToast,
  Button,
  Card,
  CardFooter,
  Form,
  Input,
  Textarea,
} from "@heroui/react";
import { Parallax, ParallaxBanner, useParallax } from "react-scroll-parallax";
import Loader from "@/components/loader/Loader";
import Techs from "@/components/techs";
import hh from "@/public/icons/hh.png";
import tg from "@/public/icons/tg.png";
import linked from "@/public/icons/linked.png";
import github from "@/public/icons/github.png";
import Pulse from "@/components/pulse";

export default function IndexPage() {
  const tech = [
    "Java",
    "Spring",
    "Typescript",
    "Next",
    "RabbitMQ",
    "Nest",
    "JUnit",
    "Git",
    "Jira",
    "Postman",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "RESTAPI",
    "Docker",
    "Kubernetes",
    "GitLab",
    "Jenkins",
    "AWS",
    "JWT",
    "Socket.io",
    "Hibernate",
    "Node.js",
    "Redis",
    "Kafka",
    "Bcrypt",

    "Java",
    "Spring",
    "Typescript",
    "Next",
    "RabbitMQ",
    "Nest",
    "JUnit",
    "Git",
    "Jira",
    "Postman",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "RESTAPI",
    "Docker",
    "Kubernetes",
    "GitLab",
    "Jenkins",
    "AWS",
    "JWT",
    "Socket.io",
    "Hibernate",
    "Node.js",
    "Redis",
    "Kafka",
    "Bcrypt",
  ];
  // const project = {
  //   title: "icelink-connection",
  //   description: "is't a platform like facebook",
  //   repositoryUrl: "https://github.com/IceLink1/icelink-connection",
  //   demoUrl: "https://connection.icelink.uz",
  //   techStack: ["React", "Express.js", "MongoDB", "Redux"],
  // };

  // const [isSumbitted, setIsSubmitted] = React.useState(false);

  // useEffect(() => {
  //   const email = localStorage.getItem("email");

  //   if (email !== "") {
  //     setIsSubmitted(true);
  //   } else {
  //     addToast({
  //       title: "Cookies",
  //       description: "We using cookies to improve your experience",
  //       timeout: 5000,
  //       shouldShowTimeoutProgress: true,
  //       color: "success",
  //     });
  //   }
  // }, []);

  // const onSubmit = (e: any) => {
  //   e.preventDefault();

  //   const data = Object.fromEntries(new FormData(e.currentTarget));

  //   addToast({
  //     title: "Success",
  //     description: `Your message has been sent, from ${e.currentTarget.email.value} to icelink39@gmail.com`,
  //     timeout: 10000,
  //     shouldShowTimeoutProgress: true,
  //     color: "success",
  //   });

  //   localStorage.setItem("email", e.currentTarget.email.value);
  //   localStorage.setItem("message", e.currentTarget.message.value);
  //   e.currentTarget.reset();

  //   setIsSubmitted(true);
  // };

  return (
    <DefaultLayout>
      <main className={`${cl.container}`}>
        <section className={`grid-flow-row  ${cl.home}`}>
          <Card className={`${(cl.card, cl.mainInfo)}`}>
            <CardFooter
              className={`flex flex-col items-center justify-center `}
            >
              <Image
                className="object-cover p-3 rounded-3xl w-full h-96"
                src={img}
                alt="icelink"
              />
              <p className=" p-4 text-lg text-gray-600">
                {siteConfig.subDescription}
              </p>
              <div className={`grid grid-cols-4 gap-4 px-4 ${cl.links}`}>
                <Link isExternal href={siteConfig.links.github}>
                  <Button
                    className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                    radius="full"
                  >
                    <Image src={github} alt="github" />
                  </Button>
                </Link>
                <Link isExternal href={siteConfig.links.telegram}>
                  <Button
                    className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                    radius="full"
                  >
                    <Image src={tg} alt="tg" />
                  </Button>
                </Link>
                <Link isExternal href={siteConfig.links.hh}>
                  <Button
                    className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                    radius="full"
                  >
                    <Image src={hh} alt="hh" />
                  </Button>
                </Link>
                <Link isExternal href={siteConfig.links.linkedin}>
                  <Button
                    className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                    radius="full"
                  >
                    <Image src={linked} alt="linkedin" />
                  </Button>
                </Link>
              </div>
            </CardFooter>
          </Card>

          <Card className={`${cl.card} flex items-center justify-center`}>
            <CardFooter
              className="flex-col items-start"
              style={{ height: "70%" }}
            >
              <h1 className="text-3xl font-bold text-center">
                Hi bro, my name is{" "}
                <span className="text-blue-500">Salohiddin</span>, and I'm a
              </h1>
              <IndexPage.Text />
            </CardFooter>
          </Card>
          <Card className={`${cl.card}`}>
            <CardFooter className="flex-col">
              <h1 className="text-3xl font-bold text-center">Tech Stack</h1>
              <div className="mt-4 text-lg text-gray-600 h-full">
                <Techs />
              </div>
            </CardFooter>
          </Card>
          <Card className={`p-4 gap-4 ${(cl.card, cl.projects)}`}>
            <div>
              <div>
                <h1 className="text-3xl font-bold text-center">Experience</h1>
                <p className="mt-4 text-lg text-gray-600 h-full flex items-center gap-3">
                  <Image src={alpha} alt="alpha" className="w-12 h-12" />
                  "Ecosystem Alpha"
                </p>
                <p className="mt-4 text-lg text-gray-600 h-full">
                  2023 - 2025 where I work as a Java software engineer, use
                  Spring Boot with Hibernate, and some time i do frontend with
                  Next.js. I make services for my company, we make a big micro
                  services architecture. I use Docker and Kubernetes for
                  deployment, and write unit tests with JUnit. I also use GitLab
                  CI/CD for continuous integration and deployment.
                </p>
              </div>
              <div className="mt-4">
                <h1 className="text-3xl font-bold text-center">Internship</h1>
                <p className="mt-4 text-lg text-gray-600 h-full flex items-center gap-3">
                  <Image
                    src={beeline}
                    alt="beeline"
                    className="w-12 h-12 rounded-full"
                  />
                  "Beeline"
                </p>
                <p className="mt-4 text-lg text-gray-600 h-full">
                  2022 - 2023 I work as a full-stack software engineer. I use
                  Node.js with Express.js, and some time i do frontend with
                  Next.js. I make services for my company, and learn new
                  technologies.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <div className="overflow-x-hidden ">
            <Parallax
              translateX={["-800px", "1000px"]}
              scale={[0.75, 1]}
              className="flex gap-6"
            >
              <Loader />
              <Loader />
              <Loader />
              <Loader />
              <Loader />
              <Loader />
              <Loader />
            </Parallax>
          </div>

          <Card className={`mx-6 ${cl.card}`}>
            <CardFooter>
              <p className="mt-4 text-lg text-gray-600">
                {siteConfig.description}
              </p>
            </CardFooter>
          </Card>

          <div className={cl.loopSlider}>
            <div className={cl.inner}>
              {tech.map((item, i) => (
                <div className={cl.tag} key={i}>
                  <span>#</span> <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`mx-6 ${cl.resume}`}>
            {/* <Card className={` ${cl.card}`}>
              <CardFooter></CardFooter>
            </Card>
            <Card className={` ${cl.card}`}>
              <CardFooter></CardFooter>
            </Card> */}
            <div className={cl.form}>
              <Card className={`w-2/3 max-md:w-full ${cl.card}`}>
                <Form onSubmit={() => null} className="flex flex-col gap-4 ">
                  <Input
                    isRequired
                    errorMessage="Please enter a valid email"
                    label="Email"
                    labelPlacement="outside"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Textarea
                    isRequired
                    label="Your idea or message"
                    placeholder="Enter your message"
                    labelPlacement="outside"
                    name="message"
                    rows={4}
                    className="resize-none"
                    errorMessage="Please enter a valid message"
                  />

                  <Button variant="solid">Submit</Button>
                </Form>
              </Card>
            </div>
          </div>
        </section>

        {/* Portals */}
        <>
          <Parallax
            translateX={["0px", "-200px"]}
            translateY={["100px", "-300px"]}
            className="absolute top-2/3 left-1/3 p-8 bg-gray-900/75 rounded-3xl "
          >
            <Pulse />
          </Parallax>
          {/* <Parallax
            translateX={["0px", "-200px"]}
            translateY={["100px", "-300px"]}
            className="absolute top-1/3 left-2/3 p-8 bg-gray-900/75 rounded-3x"
          >
            1 + 1 = 10
          </Parallax> */}
        </>
      </main>
    </DefaultLayout>
  );
}

IndexPage.Text = function () {
  return (
    <TypeAnimation
      sequence={[
        "Java Software Engineer",
        1000,
        "Full Stack Software Engineer",
        2000,
        "Backend Developer",
        3000,
      ]}
      wrapper="h1"
      cursor={false}
      repeat={Infinity}
      style={{
        fontSize: "2rem",
        display: "inline-block",
      }}
    />
  );
};

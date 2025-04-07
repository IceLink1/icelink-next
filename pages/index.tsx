"use client";

import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import cl from "@/pages/index.module.css";
import img from "@/public/images/icelink.jpg";
import alpha from "@/public/icons/alpha.svg";
import connection from "@/public/images/icelink-connection.png";

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
  Chip,
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
import Puls from "@/components/puls";

export default function IndexPage() {
  const project = {
    title: "icelink-connection",
    description: "is't a platform like facebook",
    repositoryUrl: "https://github.com/IceLink1/icelink-connection",
    demoUrl: "https://connection.icelink.uz",
    techStack: ["React", "Express.js", "MongoDB", "Redux"],
  };

  const [isSumbitted, setIsSubmitted] = React.useState(false);
  useEffect(() => {
    const email = localStorage.getItem("email");

    if (email !== "") {
      setIsSubmitted(true);
    } else {
      addToast({
        title: "Cookies",
        description: "We using cookies to improve your experience",
        timeout: 5000,
        shouldShowTimeoutProgress: true,
        color: "success",
      });
    }
  }, []);

  const onSubmit = (e: any) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    addToast({
      title: "Success",
      description: `Your message has been sent, from ${e.currentTarget.email.value} to icelink39@gmail.com`,
      timeout: 10000,
      shouldShowTimeoutProgress: true,
      color: "success",
    });

    localStorage.setItem("email", e.currentTarget.email.value);
    localStorage.setItem("message", e.currentTarget.message.value);
    e.currentTarget.reset();

    setIsSubmitted(true);
  };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }



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
                Приветик бро,
                <br /> меня зовут Салохиддин и я веб-разработчик, и не смотря на
                мой возраст я хорошо шарю в цифравых штучках
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

          <Card className={`${cl.card}`}>
            <CardFooter className="flex-col">
              <h1 className="text-3xl font-bold text-center">Experience</h1>
              <p className="mt-4 text-lg text-gray-600 h-full flex items-center gap-3">
                <Image src={alpha} alt="train" />
                "Экосистема Альфа"
              </p>
              <p className="mt-4 text-lg text-gray-600 h-full">
                Текущая место работы, <br /> где я работаю в качестве
                Frontend-разработчика
              </p>
            </CardFooter>
          </Card>
          <Card className={`${cl.card}`}>
            <CardFooter className="flex-col">
              <h1 className="text-3xl font-bold text-center">Tech Stack</h1>
              <p className="mt-4 text-lg text-gray-600 h-full">
                <Techs />
              </p>
            </CardFooter>
          </Card>
          <Card className={`p-4 gap-4 ${(cl.card, cl.projects)}`}>
            <div className="flex flex-wrap gap-6 max-lg:grid grid-cols-2 max-md:flex flex-col">
              <div>
                <h1 className="text-3xl font-bold text-center">
                  Icelink Connection
                </h1>
                <Link href="https://connection.icelink.uz">
                  <Image src={connection} alt="icelink-connection" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 max-lg:gap-4  ">
                <p>
                  Icelink Connection - это платформа, которая объединяет
                  различных пользователей, чтобы общаться вместе.{" "}
                  <i>"Да идия сварована из facebook"</i>
                </p>
                <div>
                  {" "}
                  <h2>Tech stack:</h2>
                  <p className="flex gap-2">
                    {project.techStack.map((e, i) => (
                      <p key={i}>{e}</p>
                    ))}
                  </p>
                </div>
                <Link href="https://github.com/IceLink1/icelink-connection">
                  <Button
                    className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                    radius="full"
                  >
                    Source code
                  </Button>
                </Link>
                <div className="flex align-center gap-4">
                  <p>More projects in my</p>
                  <Link href="/portfolio">
                    <Button
                      className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                      radius="full"
                    >
                      Portfolio
                    </Button>
                  </Link>
                </div>
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
                Yo bro! I’m Salohiddin 😎 I do web dev stuff– makin’ cool and
                useful web apps. Super into coding and love buildin’ things that
                work fast, look clean, and just feel nice to use. Yeah, I’m
                kinda new to the game, but I’m grindin’ on my own projects to
                show I know my tools. I mess with HTML, CSS, JS, React, Next.js,
                TypeScript, Node, Express, Mongo, Postgres – all that good
                stuff. Frontend, backend – doesn’t matter. I can do the full
                thing, from makin’ buttons to runnin’ servers and databases.
                Let’s build some dope stuff 🚀
              </p>
            </CardFooter>
          </Card>
          <div className={`mx-6 ${cl.resume}`}>
            {/* <Card className={` ${cl.card}`}>
              <CardFooter></CardFooter>
            </Card>
            <Card className={` ${cl.card}`}>
              <CardFooter></CardFooter>
            </Card> */}
            <div className={cl.form}>
              <Card className={`w-2/3 max-md:w-full ${cl.card}`}>
                <Form onSubmit={onSubmit} className="flex flex-col gap-4 ">
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
                  {isSumbitted ? (
                    <Chip color="success">You message has been sent</Chip>
                  ) : (
                    <Button type="submit" variant="solid">
                      Submit
                    </Button>
                  )}
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
            <Puls />
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
        "Frotend Developer",
        1000,
        "Backend Developer",
        2000,
        "Mobile Developer",
        3000,
      ]}
      wrapper="span"
      cursor={false}
      repeat={Infinity}
      style={{
        fontSize: "3vw",
        display: "inline-block",
      }}
    />
  );
};

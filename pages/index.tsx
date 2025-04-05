"use client";

import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import cl from "@/pages/index.module.css";
import img from "@/public/images/icelink.jpg";
import alpha from "@/public/icons/alpha.svg";

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

export default function IndexPage() {


    const projects = [
      {
        title: "icelink-connection",
        description: "is't a platform like facebook",
        repositoryUrl: "https://github.com/IceLink1/icelink-connection",
        demoUrl: "https://connection.icelink.uz",
        image: "https://iili.io/3x6VPs4.png",
        techStack: ["React", "Express.js", "MongoDB", "Redux"],
      },
      {
        title: "icelink-movies",
        description: "Some thing like Netflix",
        repositoryUrl: "https://github.com/IceLink1/movio",
        demoUrl: "https://ice-movio.vercel.app/",
        image: "https://iili.io/3xioJLb.png",
        techStack: ["Vite", "React.js", "Redux", "RTK", "Tailwind"],
      },

    ];

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
              <h1 className="text-4xl font-bold text-center">
                Hello, I am{" "}
                <span className="text-blue-500">
                  <IndexPage.Text />
                </span>
              </h1>
              <p className="mt-4 text-lg text-gray-600"></p>
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
              Данный момент я работаю в этой компании
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
          <Card className={`${(cl.card, cl.projects)}`}>
            <CardFooter></CardFooter>
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
              <Card className={`w-2/3 ${cl.card}`}>
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
      </main>
    </DefaultLayout>
  );
}

// <Link
// isExternal
// className={buttonStyles({
//   variant: "bordered",
//   radius: "full",
// })}
// href={siteConfig.links.github}
// >
// GitHub
// </Link>
// <Link
// isExternal
// className={`${buttonStyles({
//   variant: "bordered",
//   radius: "full",
// })} bg-blue-700`}
// href={siteConfig.links.telegram}
// >
// Telegram
// </Link>
// <Link
// isExternal
// className={`${buttonStyles({
//   variant: "bordered",
//   radius: "full",
// })} bg-red-700`}
// href={siteConfig.links.hh}
// >
// HH
// </Link>
// <Link
// isExternal
// className={`${buttonStyles({
//   variant: "bordered",
//   radius: "full",
// })} bg-blue-500`}
// href={siteConfig.links.linkedin}
// >
// Linked In
// </Link>

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

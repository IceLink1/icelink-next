import DefaultLayout from "@/layouts/default";
import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";
import cl from "./index.module.scss";
import { title } from "process";
import Link from "next/link";

export default function DocsPage() {
  const tech = [
    "Typescript",
    "Next.js",
    "React",
    "JavaScript",
    "ReactNative",
    "Node.js",
    "Next",
    "Express.js",
    "Nest",
    "CSS",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "RESTAPI",
    "SASS",
    "HTML",
    "JavaScript",
    "Typescript",
    "Next.js",
    "React",
    "ReactNative",
    "Express.js",
    "Next",
    "MongoDB",
    "Node.js",
    "Nest",
    "GraphQL",
    "RESTAPI",
    "SASS",
    "CSS",
    "HTML",
    "PostgreSQL",
  ];

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
    {
      title: "icelink-hamster",
      description: "Tap! tap! tap!",
      repositoryUrl: "https://github.com/IceLink1/my-hamter",
      demoUrl: "https://my-hamter.vercel.app/",
      image: "https://iili.io/3xizPhF.png",
      techStack: ["React", "Vite.js", "Sass"],
    },
    {
      title: "icelink-photos",
      description: "Photo gallery, here you find your favorite photos",
      repositoryUrl: "https://github.com/Salaxiddin/icelink-photos",
      demoUrl: "https://photo.icelink.uz/",
      image: "https://iili.io/3xiwfFj.png",
      techStack: ["Html", "Css", "Rest Api", "JavaScript"],
    },
    {
      title: "icelink-chat",
      description: "I very much using this chat",
      repositoryUrl: "https://github.com/IceLink1/icelink-chat/tree/main",
      demoUrl: "https://icelink-chat.onrender.com/",
      image: "https://iili.io/3TdGdD7.png",
      techStack: ["Vite", "React.js", "Redux", "RTK", "Tailwind", "Socket.io"],
    },
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col ">
        <div className={cl.tagList}>
          <h1>My Stack</h1>
          <div className={cl.loopSlider}>
            <div className={cl.inner}>
              {tech.map((item, i) => (
                <div className={cl.tag} key={i}>
                  <span>#</span> <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-5 max-lg:grid-cols-2 max-md:grid-cols-1 px-6">
          {projects.map((project, i) => (
            <>
              <Card isFooterBlurred className="w-full h-80">
                <CardHeader className="bg-black/40 absolute z-10 top-1 flex-col items-start ">
                  <p className="text-tiny text-white/60  uppercase font-bold bg-indigo-700 p-2  rounded-md">
                    {project.techStack.join(", ")}
                  </p>
                  <h4 className="text-white/90 font-medium text-xl">
                    {project.title}
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 w-full h-full object-cover"
                  src={project.image}
                />
                <CardFooter className="absolute flex gap-4 bg-black/40 bottom-0 z-5 border-t-1 border-default-600 dark:border-default-100">
                  <div className="flex flex-grow gap-2 items-center">
                    <div className="flex flex-col">
                      <p className="text-tiny text-white/60">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <Link href={project.demoUrl}>
                    <Button radius="full" size="sm">
                      View demo
                    </Button>
                  </Link>
                  <Link href={project.repositoryUrl}>
                    <Button radius="full" size="sm">
                      Fork in Github
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}

"use client";

import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import  cl from "@/pages/index.module.css";
import img from "@/public/images/salohiddin.jpg";

import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { useEffect } from "react";
import { addToast } from "@heroui/react";

export default function IndexPage() {
  useEffect(() => {
    addToast({
      title: "Cookies",
      description: "We using cookies to improve your experience",
      timeout: 5000,
      shouldShowTimeoutProgress: true,
      color: "success",
    });
  }, []);

  return (
    <DefaultLayout>
      <section className={`flex flex-col items-center justify-center ${cl.homeSection}`}>
        <div className="flex gap-3">
          <div className={cl.homeContainer}>
            <main className={cl.main}>
              <div>
                <Image src={img} alt="" />
              </div>
              <div className="grid gap-2 p-4 grid-rows-3  max-md:grid-rows-2 md:grid-cols-1">
                <div className="">
                  <h1 className="text-3xl p-3">You can find me here</h1>
                  <div className="flex gap-3 flex-wrap">
                    <Link
                      isExternal
                      className={buttonStyles({
                        variant: "bordered",
                        radius: "full",
                      })}
                      href={siteConfig.links.github}
                    >
                      GitHub
                    </Link>
                    <Link
                      isExternal
                      className={`${buttonStyles({
                        variant: "bordered",
                        radius: "full",
                      })} bg-blue-700`}
                      href={siteConfig.links.telegram}
                    >
                      Telegram
                    </Link>
                    <Link
                      isExternal
                      className={`${buttonStyles({
                        variant: "bordered",
                        radius: "full",
                      })} bg-red-700`}
                      href={siteConfig.links.hh}
                    >
                      HH
                    </Link>
                    <Link
                      isExternal
                      className={`${buttonStyles({
                        variant: "bordered",
                        radius: "full",
                      })} bg-blue-500`}
                      href={siteConfig.links.linkedin}
                    >
                      Linked In
                    </Link>
                  </div>
                </div>
                <h2>
                  Hi I am Salohiddin <br />
                  And I am a <br />
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
                </h2>
              </div>
            </main>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

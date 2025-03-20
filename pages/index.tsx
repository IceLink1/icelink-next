import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import "./index.css";
import img from "@/public/images/salohiddin.jpg";

import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="App">
        <section className="homeSection flex flex-col items-center justify-center">
          <div className="flex gap-3">
            <div className="homeContainer">
              <main className="main">
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
      </div>
    </DefaultLayout>
  );
}

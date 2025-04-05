import { Link } from "@heroui/link";

import { Head } from "./head";

import NextTopLoader from "nextjs-toploader";
import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <NextTopLoader
        color="violet"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        template='<div class="bar" role="bar"><div class="peg"></div></div> 
      <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        zIndex={1600}
        showAtBottom={false}
      />
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl flex-grow width-full">
        {children}
      </main>
      <footer className={`w-full flex items-center justify-center py-3 `}>
        <h1>
          copyright &copy; {new Date().getFullYear()} | Created by ICELINK
        </h1>
      </footer>
    </div>
  );
}

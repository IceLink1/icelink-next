import type { AppProps } from "next/app";

import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";

import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";
import { ToastProvider } from "@heroui/react";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <ParallaxProvider>
        <NextThemesProvider>
          <ToastProvider />
          <Component {...pageProps} />
        </NextThemesProvider>
      </ParallaxProvider>
    </HeroUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};

import React from "react";
import NextHead from "next/head";

import { siteConfig } from "@/config/site";

export const Head = () => {
  return (
    <NextHead>
      <title>{siteConfig.name}</title>
      <meta key="title" content={siteConfig.name} property="og:title" />
      <meta content={siteConfig.description} property="og:description" />
      <meta content={siteConfig.description} name="description" />
      <meta content="website" property="og:type" />
      <meta name="keywords" content={siteConfig.keywords} />
      <meta property="og:url" content="https://icelink.uz" />
      <meta property="og:title" content="IceLink" />
      <meta property="og:image" content={siteConfig.icon} />
      <meta name="robots" content="index" />
      <meta
        key="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        name="viewport"
      />
      <link href={siteConfig.icon} rel="icon" />
      {/* <script>window.yaContextCb=window.yaContextCb||[]</script>
      <script src="https://yandex.ru/ads/system/context.js" async></script> */}
    </NextHead>
  );
};

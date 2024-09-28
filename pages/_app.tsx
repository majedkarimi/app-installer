import "@/styles/globals.css";
import "@/styles/animations.css";
import type { AppProps } from "next/app";
import Providers from "@/store/Provider";

import Head from "next/head";
import Script from "next/script";
import AppInstaller from "@/UI/app-installer/AppInstaller";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <AppInstaller />
      <Head>
        <title>Banimode</title>
        <link rel="icon" href="/image/logo-dark.png" />
        <link rel="manifest" href="manifest.json" />
      </Head>
      <Component {...pageProps} />
      <Script src="pwa-installer.js" />
    </Providers>
  );
}

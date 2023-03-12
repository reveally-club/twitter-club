import Head from "next/head";
import type { AppProps } from "next/app";
import { Public_Sans } from "next/font/google";
import "../styles/globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
        <title>Twitter.club</title>
        <meta name="description" content="Twitter.club" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://twitter.reveally.club" />
        <meta property="og:title" content="Twitter.club" />
        <meta
          property="og:image"
          content="https://twitter.reveally.club/og.png"
        />
        <meta
          property="og:description"
          content="Solutions to help you use Twitter more simply and efficiently, Twitter.club"
        />
        <meta property="og:site_name" content="Twitter.club" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="Twitter.club" />
        <meta name="twitter:title" content="Twitter.club" />
        <meta
          name="twitter:description"
          content="Solutions to help you use Twitter more simply and efficiently, Twitter.club"
        />
        <meta name="twitter:url" content="https://twitter.reveally.club" />
      </Head>
      <main className={publicSans.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

import "../styles/globals.css";
import type { AppProps } from 'next/app';
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps):JSX.Element {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>sharlabs</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap"
          rel="stylesheet"
        />
        <meta property="og:title" content="sharlabs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="sharlabs proton bolier plate" />
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:site" content="@protonxpr" key="twhandle" />
        <meta name="twitter:image" content="/bg.jpeg" key="twimage" />
        <meta name="twitter:title" content="sharlabs" key="twtitle" />
        <meta
          name="twitter:description"
          content="sharlabs proton bolier plate"
          key="twdescription"
        />

        {/* Open Graph */}
        <meta name="og:site_name" content="sharlabs" key="ogsitename" />
        <meta name="og:image" content="/bg.jpeg" key="ogimage" />
        <meta
          name="og:description"
          content="sharlabs proton bolier plate"
          key="ogdescription"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

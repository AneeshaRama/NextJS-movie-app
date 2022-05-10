import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Stream TV and Movies with HULU</title>
        <link
          rel="shortcut icon"
          href="https://assetshuluimcom-a.akamaihd.net/h3o/icons/favicon.ico.png"
          type="image/x-icon"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

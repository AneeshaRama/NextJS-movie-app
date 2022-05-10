import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Stream TV and Movies with HULU</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Modulation Podcast</title>
        <meta name="title" content="Modulation Podcast" />
        <meta name="description" content="Modulation Podcast - Covering the most essential albums, 2 weeks at a time" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://modulat.io/" />
        <meta property="og:title" content="Modulation Podcast" />
        <meta
          property="og:description"
          content="Modulation Podcast - Covering the most essential albums, 2 weeks at a time"
        />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://modulat.io/" />
        <meta property="twitter:title" content="Modulation Podcast" />
        <meta
          property="twitter:description"
          content="Modulation Podcast - Covering the most essential albums, 2 weeks at a time"
        />
        <meta property="twitter:image" content="" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Modulation Podcast</h1>
          <h4 className="large">Covering the most essential albums, 2 weeks at a time</h4>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;

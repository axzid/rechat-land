import Head from "next/head";
import Download from "../components/Download";
import Faq from "../components/Faq";
import Fitur from "../components/Fitur";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Teknologi from "../components/Teknologi";

export default function index(params) {
  return (
    <>
      <Head>
        <title>Chat N' Rechat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Fitur />
      <Teknologi />
      <Download />
      <Faq />
    </>
  );
}

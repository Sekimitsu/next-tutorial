import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "../component/Main";
import { Header } from "../component/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <Main page="about" />
    </>
  );
}

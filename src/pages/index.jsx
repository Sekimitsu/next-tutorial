import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "../component/Main";
import { Header } from "../component/Header";
import { useCallback, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const foo = 1;
  const handleClick = useCallback((e) => {
    e.preventDefault();
    alert(foo);
  },[]);

  useEffect(() => {  //マウント時の処理
    document.body.style.backgroundColor = "lightblue";
    return () => {  //アンマウント時の処理
      document.body.style.backgroundColor = "";
    }
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Header />

      <a href="/about.jsx" onClick={handleClick} >
        ボタン
      </a>
      
      <Main page="index" />

    </>
  );
}

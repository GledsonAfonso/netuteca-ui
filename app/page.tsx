import Main from "@pages/main/components/Main";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <Main></Main>
    </div>
  );
}

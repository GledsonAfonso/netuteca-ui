import BooksButton from "@/shared/components/Books/BooksButton";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <BooksButton></BooksButton>
    </div>
  );
}

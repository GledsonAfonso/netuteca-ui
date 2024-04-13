import Navbar from "@shared/components/Navbar/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import Head from "next/head";
import "@app/globals.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <Navbar />

      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

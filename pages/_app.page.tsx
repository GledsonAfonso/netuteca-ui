import "@app/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Navbar from "@shared/components/Navbar/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import Head from "next/head";

config.autoAddCss = false;

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
      
      <div id="modal-root"></div>
    </QueryClientProvider>
  );
}

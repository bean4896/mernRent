import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/Layout/Layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "../components/ui/loader";
import { Web3Modal } from "@web3modal/react";
import { chains, providers } from "@web3modal/ethereum";

const config = {
  projectId: 'bda67da2037385ea986471dbb6622f22',
  theme: 'dark',
  accentColor: 'green',
  ethereum: {
    appName: 'web3Modal'
  },
  autoConnect: false
}
function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //routeChangeStart
    //routeChangeComplete
    //routeChangeError
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    // const handleComplete = (url) => (url === router.asPath) && setTimeout(() => setLoading(false), 100);
    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 100);
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  return (
    loading && (
      <>
        <Loader />
      </>
    )
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
      <Web3Modal config={config} />
        <Loading />
        <ThemeProvider attribute="class">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}

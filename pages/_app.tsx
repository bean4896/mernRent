import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/layout/Layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LoaderCircle from "../components/ui/LoaderCircle";
import { Web3Modal } from "@web3modal/react";

const config = {
  projectId: "bda67da2037385ea986471dbb6622f22",
  theme: "dark" as const,
  accentColor: "green" as const,
  ethereum: {
    appName: "web3Modal",
  },
  autoConnect: false,
};

interface config {
  projectId: string;
  theme: string;
  accentColor: string;
  ethereum: {
    appName: string;
  };
  autoConnect: boolean;
}

function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    //routeChangeStart
    //routeChangeComplete
    //routeChangeError
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 400);
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  return loading ? <LoaderCircle /> : null;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Loading />
      <SessionProvider session={pageProps.session}>
        <Web3Modal config={config} />
        <ThemeProvider attribute="class">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}

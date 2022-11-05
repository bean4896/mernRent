import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'
import Layout from  '../components/Layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <SessionProvider>
  <ThemeProvider attribute="class">
   <Layout>
  <Component {...pageProps} />
  </Layout>
  </ThemeProvider>
  </SessionProvider>
   )
}

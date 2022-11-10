import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'
import Layout from  '../components/Layout/Layout'

import {chains, providers} from '@web3modal/ethereum'


const config = {
  projectId: '<YOUR_PROJECT_ID>',
  theme: 'dark',
  accentColor: 'default',
  ethereum: {
    appName: 'web3Modal',
    chains: [
      chains.mainnet,
      chains.ropsten,
    ],
    providers: [
      providers.walletConnectProvider({projectId:'<YOUR_PROJECT_ID>'}),
    ],
    autoConnect: false,
  }
}


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

import '../styles/globals.css'
import '../styles/windi.css'
import '../styles/styles.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

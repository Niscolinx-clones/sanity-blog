import type { AppProps } from 'next/app'
import 'windi.css'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <div className="grid-cols-18  mx-auto grid w-full max-w-7xl">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

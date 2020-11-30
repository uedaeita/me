import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/main.scss'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Eitaro Ueda | Web Application Engineer</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <Component {...pageProps} />
  </>
)

export default App

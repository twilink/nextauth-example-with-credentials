import '../styles/normalize.css'
import '../styles/global.css'
import Head from 'next/head'
import { Provider } from 'next-auth/client'

export default function App ({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
       <>
          <Head>
            <link rel='preconnect' href='//fonts.gstatic.com' crossOrigin />
            <link href='https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600;1,700;1,900&display=swap' rel='stylesheet' />
          </Head>
          <Component {...pageProps} />
        </>
    </Provider>
  )
}

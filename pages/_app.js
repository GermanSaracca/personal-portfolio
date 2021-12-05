//LAYOUT
import Layout from '../layout'
import '../sass/index.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

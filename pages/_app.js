//LAYOUT
import Layout from '../layout'
//CSS
import '../styles/Home.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

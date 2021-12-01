//LAYOUT
import LocaleSwitcher from '../components/LocaleSwitcher'
import Layout from '../layout'
//CSS
import '../styles/Home.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <LocaleSwitcher />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

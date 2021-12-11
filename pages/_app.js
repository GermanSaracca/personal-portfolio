//LAYOUT
import Layout from '../layout'

import { ColorThemeProvider } from '../context/ThemeProvider'
import '../sass/index.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ColorThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ColorThemeProvider>
  )
}

export default MyApp

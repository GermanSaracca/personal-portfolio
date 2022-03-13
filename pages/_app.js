import Layout from '../components/layout'
import { ColorThemeProvider } from '../context/ThemeProvider'
import '../styles/globals.css'

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

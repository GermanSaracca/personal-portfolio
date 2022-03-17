import Layout from '../components/layout'
import { ColorThemeProvider } from '../context/ThemeProvider'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    const router = useRouter()

    return (
        <ColorThemeProvider>
            <Layout>
                <AnimatePresence exitBeforeEnter={true}>
                    <Component {...pageProps} key={router.pathname} />
                </AnimatePresence>
            </Layout>
        </ColorThemeProvider>
    )
}

export default MyApp

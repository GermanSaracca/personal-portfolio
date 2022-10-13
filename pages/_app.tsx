import Layout from '../components/layout'
import type { AppProps } from 'next/app'
import { ColorThemeProvider } from '../context/ThemeProvider'
import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()

    return (
        <ColorThemeProvider>
            <Layout>
                <Component {...pageProps} key={router.pathname} />
            </Layout>
        </ColorThemeProvider>
    )
}

export default appWithTranslation(MyApp)

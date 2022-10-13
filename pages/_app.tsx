import Layout from '../components/layout'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { ColorThemeProvider } from '../context/ThemeProvider'
import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()

    return (
        <ColorThemeProvider>
            <Layout>
                <Script
                    strategy="afterInteractive"
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                />
                <Script
                    id="gtag-init"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                    `,
                    }}
                />

                <Head>
                    <title>Germán Saracca Portfolio</title>
                </Head>
                <Component {...pageProps} key={router.pathname} />
            </Layout>
        </ColorThemeProvider>
    )
}

export default appWithTranslation(MyApp)

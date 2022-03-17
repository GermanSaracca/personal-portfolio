//Home page
import client from '../configs/contentfulClient'
import LoadingPage from '../components/LoadingPage'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { variantPage } from '../configs/pageAnimationsVariants'
//Hooks
import useScrollToTop from '../hooks/useScrollTop'

const Home = ({ hero }) => {
    console.log(hero)

    const router = useRouter()
    const { locale, locales, defaultLocale } = router

    if (!hero) {
        return <LoadingPage />
    }

    const { fields } = hero[0]

    return (
        <motion.div
            variants={variantPage}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: 'linear' }}
            className=""
        >
            <div className="container">
                <h1>{fields.title}</h1>
                <h2>{fields.subtitle}</h2>
                <p>{fields.description}</p>
                <a href={fields.curriculumPdf.fields.file.url} target="_blank" rel="noreferrer">
                    Download pdf
                </a>
            </div>
        </motion.div>
    )
}

export async function getStaticProps(context) {
    const { locale } = context
    // TRAER LOS DATOS DE LA API DE CONTENTFUL
    const hero = await client.getEntries({
        content_type: 'portfolioHero',
        locale: locale === 'es' ? 'es-AR' : 'en-US',
    })

    if (hero.total === 0) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            hero: hero.items,
        },
        revalidate: 10,
    }
}

export default Home

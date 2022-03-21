//Home page
import client from '../configs/contentfulClient'
import LoadingPage from '../components/LoadingPage'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { variantPage } from '../configs/pageAnimationsVariants'
//Hooks
import useScrollToTop from '../hooks/useScrollTop'
import Wave from '../components/Wave'

const Home = ({ hero }) => {
    const router = useRouter()
    const { locale, locales, defaultLocale } = router

    if (!hero) {
        return <LoadingPage />
    }

    const { fields } = hero[0]
    // const variantPage = {
    //     hidden: { opacity: 0, x: -200, y: 0, transition: { duration: 0.5 } },
    //     enter: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5 } },
    //     exit: { opacity: 0, x: 0, y: -100, transition: { duration: 0.5 } },
    // }

    const titleVariants = {
        hidden: { borderBottom: '0' },
        enter: { borderBottom: '100%', borderColor: 'red' },
    }

    return (
        <motion.section
            variants={variantPage}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: 'linear' }}
            className=""
        >
            <h1 variants={titleVariants} className="mb-4 font-bold">
                {fields.title}
            </h1>
            <h2 className="font-semibold text-sky-600 dark:text-sky-400">{fields.subtitle}</h2>
            <p>{fields.description}</p>
            <a className="btn" href={fields.curriculumPdf.fields.file.url} target="_blank" rel="noreferrer">
                Download pdf
            </a>
        </motion.section>
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

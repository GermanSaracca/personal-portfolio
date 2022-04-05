//Home page
import client from '../configs/contentfulClient'
import LoadingPage from '../components/LoadingPage'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { variantPage } from '../configs/pageAnimationsVariants'
//Hooks
import useScrollToTop from '../hooks/useScrollTop'
//Components
import ContactForm from '../components/ContactForm'
import { HiOutlineMail } from 'react-icons/hi'

const Home = ({ hero }) => {
    console.log(hero)
    const router = useRouter()
    const { locale, locales, defaultLocale } = router

    if (!hero) {
        return <LoadingPage />
    }

    const { fields } = hero[0]

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
            <h1 className="mb-6 font-semibold ">{fields.title}</h1>
            <h2 className="mb-8 font-semibold text-sky-600 dark:text-sky-400">{fields.subtitle}</h2>
            <p className="mb-8 lg:max-w-3xl">{fields.description}</p>
            <a className="btn" href={fields.curriculumPdf.fields.file.url} target="_blank" rel="noreferrer">
                Download pdf
            </a>
            <section className="w-full py-4 mt-8 sm:max-w-sm ">
                <h3 className="flex items-center mb-4 ">
                    Enviame un mensaje <HiOutlineMail className="ml-2 text-sky-600 dark:text-sky-400" size={'1.10em'} />
                </h3>

                <ContactForm />
            </section>
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

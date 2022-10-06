//** Home Page */
import client from '../configs/contentfulClient'
import LoadingPage from '../components/LoadingPage'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
//Containers
import Hero from '../containers/Hero'
import Work from '../containers/Work'
import Contact from '../containers/Contact'
//Components
// import ContactForm from '../components/ContactForm'
// import { HiOutlineMail } from 'react-icons/hi'

const Home = ({ hero, works }) => {
    if (!hero) {
        return <LoadingPage />
    }

    const { fields: heroFields } = hero[0]

    const worksFormatted = works && works.length && works.map((p) => p.fields).sort((a, b) => a.order - b.order)

    return (
        <>
            <Hero fields={heroFields} />

            {/* Works */}
            {worksFormatted.length && <Work work={worksFormatted} />}

            {/* Contact */}
            <Contact />

            {/* <section className="h-screen border-2 border-yellow-600" id="skills"></section> */}
        </>
    )
}

export async function getStaticProps(context) {
    const { locale } = context

    const contentLocale = locale === 'es' ? 'es-AR' : 'en-US'

    // TRAER LOS DATOS DE LA API DE CONTENTFUL

    const hero = await client.getEntries({
        content_type: 'portfolioHero',
        locale: contentLocale,
    })
    const projects = await client.getEntries({
        content_type: 'portfolioProject',
        locale: contentLocale,
    })

    return {
        props: {
            hero: hero.items,
            works: projects.items,
            ...(await serverSideTranslations(locale, ['common'])),
        },
        revalidate: 10,
    }
}

export default Home

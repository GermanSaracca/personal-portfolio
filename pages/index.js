//** Home Page */
import client from '../configs/contentfulClient'
import LoadingPage from '../components/LoadingPage'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
//Containers
import Hero from '../containers/Hero'
import Work from '../containers/Work'
//Components
// import ContactForm from '../components/ContactForm'
// import { HiOutlineMail } from 'react-icons/hi'

const Home = ({ hero, works }) => {
    if (!hero) {
        return <LoadingPage />
    }

    const { fields: heroFields } = hero[0]

    const worksFormatted = works.map((p) => p.fields)

    return (
        <>
            <Hero fields={heroFields} />
            <Work work={worksFormatted} />
            <section className="h-screen border-2 border-yellow-600" id="skills"></section>
            <section className="h-screen border-2 border-green-600" id="contact">
                {/* <section className="w-full py-4 mt-8 sm:max-w-sm ">
                    <h3 className="flex items-center mb-4 ">
                        Enviame un mensaje{' '}
                        <HiOutlineMail className="ml-2 text-sky-600 dark:text-sky-400" size={'1.10em'} />
                    </h3>

                    <ContactForm />
                </section> */}
            </section>
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
            ...(await serverSideTranslations(locale, ['common'], null, ['es', 'en'])),
        },
        revalidate: 10,
    }
}

export default Home

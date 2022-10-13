// Home Page
import client from '../configs/contentfulClient'
import LoadingPage from '../components/LoadingPage'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
// Containers
import Hero from '../containers/Hero'
import Work from '../containers/Work'
import Contact from '../containers/Contact'
import { GetStaticProps } from 'next'
import { IHero, IWorks, WorkFields } from '../types'

interface Props {
    hero: IHero[]
    works: IWorks[]
}

const Home = ({ hero, works }: Props) => {
    if (!hero) {
        return <LoadingPage />
    }

    const { fields: heroFields } = hero[0]

    const worksFormatted: WorkFields[] | 0 =
        works && works.length && works.map((p) => p.fields).sort((a, b) => a.order - b.order)

    return (
        <>
            <Hero heroFields={heroFields} />

            {/* Works */}
            {works.length && <Work work={worksFormatted as WorkFields[]} />}

            {/* Contact */}
            <Contact />
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
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
            ...(await serverSideTranslations(locale as string, ['common'])),
        },
        revalidate: 10,
    }
}

export default Home

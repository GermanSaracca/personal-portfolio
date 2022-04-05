//Project page
import client from '../../configs/contentfulClient'
import { motion } from 'framer-motion'
import { variantPage } from '../../configs/pageAnimationsVariants'
import Image from 'next/image'

const Projects = ({ projects }) => {
    // const { fields } = projects[0]

    console.log(projects)

    return (
        <motion.div
            variants={variantPage}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: 'linear' }}
            className=""
        >
            <h1 className="mb-6 font-semibold">Proyectos</h1>

            <div className="flex gap-4 overflow-x-scroll overflow-y-hidden snap-x no-scrollbar">
                {projects.map(({ fields }) => {
                    return (
                        <div className="w-full min-w-full snap-center">
                            <h2 className="mb-8 font-semibold text-sky-600 dark:text-sky-400"> {fields.title}</h2>
                            <Image
                                src={`https:${fields.thumbnail.fields.file.url}`}
                                alt={fields.thumbnail.fields.title}
                                width={300}
                                height={300}
                                layout="responsive"
                            />
                        </div>
                    )
                })}
            </div>

            {/* <div>
                {fields.stackIcons.map((icon) => (
                    <div key={icon.fields.title}>
                        <img src={icon.fields.file.url} alt={icon.fields.title} />
                        <span>{icon.fields.description}</span>
                    </div>
                ))}
            </div> */}
        </motion.div>
    )
}

export async function getStaticProps(context) {
    const { locale } = context

    // TRAER LOS DATOS DE LA API DE CONTENTFUL
    const projects = await client.getEntries({
        content_type: 'portfolioProject',
        locale: locale === 'es' ? 'es-AR' : 'en-US',
    })

    if (projects.total === 0) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            projects: projects.items,
        },
        revalidate: 10,
    }
}

export default Projects

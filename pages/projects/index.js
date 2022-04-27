//Project page
import client from '../../configs/contentfulClient'
import { motion } from 'framer-motion'
import { variantPage } from '../../configs/pageAnimationsVariants'
import Image from 'next/image'

const Projects = ({ projects }) => {
    // const { fields } = projects[0]

    console.log({ projects })

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

            <div className="flex flex-col border-2z border-red-400z gap-12">
                {projects.map(({ fields }) => {
                    return (
                        <div
                            className="w-full  border-2 border-gray-800 
                        dark:border-sky-400 after:w-full after:h-full after:absolute after:left-1 after:top-1  
                        after:dark:border-sky-400 after:dark:bg-gray-800 after:-z-10 text-gray-800 dark:text-gray-200 uppercase font-semibold after:border-gray-800 
                        after:border-2 hover:after:left-2 hover:after:top-2 after:transition-all after:ease-linear focus-visible:outline-offset-8"
                        >
                            <h2 className="mb-4 font-semibold text-sky-600 dark:text-sky-400"> {fields.title}</h2>
                            <div className="relative w-full aspect-square">
                                <Image
                                    src={`https:${fields.thumbnail.fields.file.url}`}
                                    alt={fields.thumbnail.fields.title}
                                    width={300}
                                    height={300}
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                />
                            </div>
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

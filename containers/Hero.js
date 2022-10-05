import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import { CgMouse } from 'react-icons/cg'
import { HiChevronDown } from 'react-icons/hi'

const list = {
    visible: {
        transition: {
            when: 'afterChildren',
            delayChildren: 0.5,
            staggerChildren: 0.6,
        },
    },
}

const fromLeft = {
    visible: { opacity: 1, x: 0, transition: { type: 'spring', bounce: 0.5, duration: 2 } },
    hidden: { opacity: 0, x: -100 },
}
const fromBottom = {
    visible: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.5, duration: 2 } },
    hidden: { opacity: 0, y: 50 },
}

const Hero = ({ fields }) => {
    const { t } = useTranslation('common')

    return (
        <section className="min-h-screen flex flex-col justify-center relative section-padding" id="hero-intro">
            <motion.div initial="hidden" whileInView="visible" variants={list} viewport={{ once: true }}>
                <motion.h1 variants={fromLeft} className="mb-6 text-3xl lg:text-4xl 2xl:text-5xl font-semibold">
                    {t('hero.greeting_prepend')} {fields.title}
                </motion.h1>
                <motion.h2
                    variants={fromBottom}
                    className="mb-8 text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-sky-600 dark:text-sky-400"
                >
                    {fields.subtitle}
                </motion.h2>
                <motion.p variants={fromBottom} className="mb-8 lg:max-w-3xl 2xl:max-w-4xl">
                    {fields.description}
                </motion.p>
                <motion.div variants={fromBottom} className="btn-wrapper">
                    <a className="btn" href={fields.curriculumPdf.fields.file.url} target="_blank" rel="noreferrer">
                        {t('hero.download_pdf')}
                    </a>
                </motion.div>
                <motion.div variants={fromBottom} className=" absolute bottom-12 left-[50%] translate-x-[-50%]">
                    <motion.div
                        animate={{
                            y: [0, 25, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                        }}
                        initial="false"
                        className="hidden lg:flex flex-col items-center text-gray-800 dark:text-sky-400"
                    >
                        <CgMouse size={40} />
                        <HiChevronDown size={30} />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}
export default Hero

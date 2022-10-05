import { useTranslation } from 'next-i18next'
import SectionTitle from '../components/SectionTitle'
import WorkCard from '../components/WorkCard'

const Work = ({ work }) => {
    const { t } = useTranslation('common')

    console.log({ work })

    return (
        <section className="min-h-screen section-padding pt-12" id="work">
            {/* Title */}
            <div className="mb-16">
                <SectionTitle word={t('work.title')} />
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {work.map((w) => (
                    <WorkCard work={w} key={w.slug} />
                ))}
            </div>
        </section>
    )
}
export default Work

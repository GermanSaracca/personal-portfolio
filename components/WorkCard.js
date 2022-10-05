import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { BsGithub } from 'react-icons/bs'
import { HiOutlineExternalLink } from 'react-icons/hi'
import Tooltip from './Tooltip'

const WorkCard = ({ work }) => {
    const { title, description, stackIcons, slug, thumbnail, webUrl, repoUrl } = work

    const { t } = useTranslation('common')

    // console.log(work)
    return (
        <div className="isolate">
            <div
                className="relative border-[3px] bg-gray-300 dark:bg-gray-900 border-gray-800 text-gray-800 dark:text-gray-200 dark:border-sky-400 h-full
                after:w-full after:h-full after:absolute after:left-3 after:top-3 after:bg-gray-300 after:dark:border-sky-400 after:dark:bg-gray-900 after:-z-10  after:border-gray-800 after:border-[3px] hover:after:left-4 hover:after:top-4 after:transition-all after:ease-linear !important"
            >
                <div className="flex flex-col p-4 h-full">
                    {/* Title */}
                    <h3 className="text-3xl font-semibold mb-6 pb-2 truncate relative after:bg-sky-600 dark:after:bg-sky-400 after:w-full after:h-[3px] after:absolute after:bottom-0 after:left-0">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg mb-4 break-words min-h-[90px]">{description}</p>

                    {/* THUMBNAIL */}
                    <div className="relative mb-8 rounded-lg overflow-hidden">
                        <Image
                            src={`https:${thumbnail.fields.file.url}`}
                            alt={thumbnail.fields.title}
                            layout="responsive"
                            objectFit="cover"
                            width={'100%'}
                            height={60}
                            // placeholder="blur"
                            // blurDataURL={`https:${thumbnail.fields.file.url}`}
                        />
                    </div>
                    {/* LINKS CODE - WEB */}
                    <div className="flex items-center gap-5">
                        {/* REPO */}
                        {repoUrl && (
                            <Tooltip tooltipText={t('work.go_website')} orientation="right">
                                <div className="text-gray-800 dark:text-sky-400">
                                    <a href={repoUrl} target="_blank" rel="noreferrer" title={t('work.go_repo')}>
                                        <BsGithub size={30} />
                                    </a>
                                </div>
                            </Tooltip>
                        )}

                        {/* WEBSITE */}
                        {webUrl && (
                            <Tooltip tooltipText={t('work.go_website')} orientation="left">
                                <div className="text-gray-800 dark:text-sky-400">
                                    <a href={webUrl} target="_blank" rel="noreferrer">
                                        <HiOutlineExternalLink size={30} />
                                    </a>
                                </div>
                            </Tooltip>
                        )}
                    </div>

                    {/* STACK */}
                    <div className="flex items-center gap-5 self-end mt-auto">
                        {stackIcons.map((icon) => {
                            return (
                                <div className="" key={icon.fields.title}>
                                    <Image
                                        src={`https:${icon.fields.file.url}`}
                                        width={40}
                                        height={40}
                                        alt={icon.fields.title}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WorkCard

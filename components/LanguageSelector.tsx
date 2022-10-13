import { useRouter } from 'next/router'
import { MdLanguage } from 'react-icons/md'

export default function LanguageSelector() {
    const router = useRouter()
    const { locale: activeLocale, pathname, query } = router

    const changeLocale = () => {
        const locale = activeLocale === 'en' ? 'es' : 'en'
        router.push({ pathname, query }, undefined, { locale })
    }

    return (
        <button
            className="flex items-center gap-1 text-2xl transition duration-200 ease-in-out dark:hover:text-sky-400 hover:text-sky-600 xl:text-3xl"
            onClick={changeLocale}
        >
            <MdLanguage size="1em" />
            <span className="text-sm sm:text-base xl:text-lg">{activeLocale === 'en' ? 'EN' : 'ES'}</span>
            <span className="sr-only">{activeLocale === 'en' ? 'Cambiar a español' : 'Change to english'}</span>
        </button>
    )
}
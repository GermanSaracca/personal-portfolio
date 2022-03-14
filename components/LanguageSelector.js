import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { MdLanguage } from 'react-icons/md'

export default function LanguageSelector() {
    const router = useRouter()
    const { locale: activeLocale, pathname, query } = router

    const changeLocale = (e) => {
        const locale = activeLocale === 'en' ? 'es' : 'en'
        router.push({ pathname, query }, null, { locale })
    }

    return (
        <button
            className="flex items-center gap-1 text-2xl transition duration-200 ease-in-out dark:hover:text-sky-400 hover:text-sky-600 xl:text-3xl"
            aria-label={`${activeLocale === 'en' ? 'Change to spanish' : 'Change to english'}`}
            onClick={changeLocale}
        >
            <MdLanguage size="1em" />
            <span className="text-base xl:text-lg">{activeLocale === 'en' ? 'EN' : 'ES'}</span>
        </button>
    )
}

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
            className="flex gap-1"
            aria-label={`${activeLocale === 'en' ? 'Change to spanish' : 'Change to english'}`}
            onClick={changeLocale}
        >
            <MdLanguage size="1.5em" />
            {activeLocale === 'en' ? 'EN' : 'ES'}
        </button>
    )
}

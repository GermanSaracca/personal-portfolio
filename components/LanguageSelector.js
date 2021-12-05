import { useRouter } from 'next/router'

export default function LanguageSelector() {
  const router = useRouter()
  const { locales, locale: activeLocale, pathname, query } = router

  const changeLocale = (e) => {
    const locale = e.target.value
    router.push({ pathname, query }, null, { locale })
  }

  return (
    <div className="language-selector">
      <select onChange={changeLocale}>
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale}
          </option>
        ))}
      </select>
    </div>
  )
}

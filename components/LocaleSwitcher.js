import { useRouter } from 'next/router'

export default function LocaleSwitcher() {
  const router = useRouter()
  const { locales, locale: activeLocale, pathname, query } = router

  console.log({ activeLocale })

  const changeLocale = (e) => {
    const locale = e.target.value
    router.push({ pathname, query }, null, { locale })
  }

  return (
    <div>
      <p>Locale switcher:</p>
      <p>Lenguaje actual: {activeLocale}</p>
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

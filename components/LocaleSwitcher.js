import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LocaleSwitcher() {
  const router = useRouter()
  const { locales, locale: activeLocale, pathname, query, asPath } = router

  console.log({ locales, activeLocale, pathname, query, asPath })
  const otherLocales = locales.filter((locale) => locale !== activeLocale)

  const changeLocale = (e) => {
    const locale = e.target.value
    router.push({ pathname, query }, null, { locale })
  }

  return (
    <div>
      <p>Locale switcher:</p>
      <select onChange={changeLocale}>
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale}
          </option>
        ))}
      </select>
      {/* <ul>
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router
          console.log({ pathname, query, asPath })
          return (
            <li key={locale}>
              <Link
                href={{ pathname, query }}
                as={asPath}
                locale={locale}
                passHref
              >
                <a></a>{locale}
              </Link>
            </li>
          )
        })}
      </ul> */}
    </div>
  )
}

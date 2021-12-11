import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function LanguageSelector() {
  const router = useRouter()
  const { locale: activeLocale, pathname, query } = router

  const changeLocale = (e) => {
    const locale = e.target.value
    router.push({ pathname, query }, null, { locale })
  }

  return (
    <div className="language-selector">
      <label htmlFor="buttons-group">Pick your language</label>
      <div className="buttons-group" id="buttons-group">
        <button
          className="btn-lang"
          aria-label="Change to english language"
          onClick={changeLocale}
          value={'en'}
          disabled={activeLocale === 'en'} //Deshabilito el boton si ya se esta en ingles
        ></button>
        <button
          className="btn-lang"
          aria-label="Cambiar idioma a español"
          onClick={changeLocale}
          value={'es'}
          disabled={activeLocale === 'es'}
        ></button>
      </div>
    </div>
  )
}

import { useState } from 'react'
import Link from 'next/link'
//components
import ColorSelector from '../components/ColorSelector'
import LanguageSelector from '../components/LanguageSelector'
//Icons
import { GoSettings } from 'react-icons/go'
//Hooks
import useWindowWidth from '../hooks/useWindowWidth'

const Header = () => {
  const windowWidth = useWindowWidth()

  const [mobileSelectorOpen, setIsMobileSelectorOpen] = useState(false)

  console.log(windowWidth)

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </nav>

      {windowWidth >= 992 ? (
        <div className="desktop-selectors">
          <ColorSelector />
          <LanguageSelector />
        </div>
      ) : (
        <div
          className={`mobile-selectors ${mobileSelectorOpen ? 'open' : ''}`}
          onClick={() => setIsMobileSelectorOpen(!mobileSelectorOpen)}
        >
          <GoSettings size="7vw" />
          {mobileSelectorOpen && (
            <div className="settings">
              <ColorSelector />
              <LanguageSelector />
            </div>
          )}
        </div>
      )}
    </header>
  )
}
//THANKS Howdy from coolors.co [https://fabrizio.io/, https://coolors.co/]
export default Header

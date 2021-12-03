import Link from 'next/link'

//components
import ThemeColorPicker from '../components/ThemeColorPicker'
import LocaleSwitcher from '../components/LocaleSwitcher'
const Header = () => {
  return (
    <header>
      <div className="logo"></div>
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
      <LocaleSwitcher />
      <ThemeColorPicker />
    </header>
  )
}
//THANKS Howdy from coolors.co [https://fabrizio.io/, https://coolors.co/]
export default Header

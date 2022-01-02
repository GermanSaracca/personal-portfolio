import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
//components
import { NavLink } from '../components/NavLink'
import ColorSelector from '../components/ColorSelector'
import LanguageSelector from '../components/LanguageSelector'
//Icons
import { GoSettings } from 'react-icons/go'
//Hooks
import useWindowWidth from '../hooks/useWindowWidth'

const Header = () => {
  const windowWidth = useWindowWidth()
  const { pathname } = useRouter()

  return (
    <header className="header">
      <nav>
        <ul>
          <li className={`list-item ${pathname === '/' ? 'active' : ''}`}>
            <NavLink href="/" exact className="nav-link">
              Home
              <span></span>
              <span></span>
            </NavLink>
          </li>
          <li
            className={`list-item ${pathname === '/projects' ? 'active' : ''}`}
          >
            <NavLink href="/projects" exact className="nav-link">
              Projects
              <span></span>
              <span></span>
            </NavLink>
          </li>
          <li className={`list-item ${pathname === '/skills' ? 'active' : ''}`}>
            <NavLink href="/skills" exact className="nav-link">
              Skills
              <span></span>
              <span></span>
            </NavLink>
          </li>
          <li
            className={`list-item ${pathname === '/contact' ? 'active' : ''}`}
          >
            <NavLink href="/contact" exact className="nav-link">
              Contact
              <span></span>
              <span></span>
            </NavLink>
          </li>
          <li className={`list-item configs`}>
            <button className="config-btn" title="Configuraciones">
              <GoSettings size="24px" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
//THANKS Howdy from coolors.co [https://fabrizio.io/, https://coolors.co/]
export default Header

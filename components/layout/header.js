import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
//components
import { NavLink } from '../NavLink'
import ColorSelector from '../ColorSelector'
import LanguageSelector from '../LanguageSelector'
//Hooks
import useWindowWidth from '../../hooks/useWindowWidth'

import { IoEllipsisHorizontalSharp } from 'react-icons/io5'

const Header = () => {
    const windowWidth = useWindowWidth()
    const { pathname } = useRouter()

    const [navState, setNavState] = useState(false)

    return (
        <header className="fixed flex items-center w-full px-4 text-gray-800 bg-gray-200 h-14 dark:bg-gray-800 dark:text-gray-200">
            <nav className="h-full basis-2/3">
                <ul className="flex items-center h-full gap-4">
                    <li className="relative grid h-full place-items-center">
                        <NavLink href="/" exact className="nav-link">
                            About me
                        </NavLink>
                        <span
                            className={
                                pathname === '/'
                                    ? 'absolute bottom-0 w-8 h-1 animate-widthFull duration-200 bg-sky-700'
                                    : 'absolute bottom-0 w-0 h-1 duration-200 bg-sky-700'
                            }
                        ></span>
                    </li>
                    <li className="relative grid h-full place-items-center">
                        <NavLink href="/projects" exact className="nav-link">
                            Proyectos
                        </NavLink>
                        <span
                            className={
                                pathname === '/projects'
                                    ? 'absolute bottom-0 w-8 h-1 animate-widthFull duration-200 bg-sky-700'
                                    : 'absolute bottom-0 w-0 h-1 duration-200 bg-sky-700'
                            }
                        ></span>
                    </li>
                    <li className="relative grid h-full place-items-center">
                        <NavLink href="/skills" exact className="nav-link">
                            Skills
                        </NavLink>
                        <span
                            className={
                                pathname === '/skills'
                                    ? 'absolute bottom-0 w-8 h-1 animate-widthFull duration-200 bg-sky-700'
                                    : 'absolute bottom-0 w-0 h-1 duration-200 bg-sky-700'
                            }
                        ></span>
                    </li>
                </ul>
            </nav>
            <ul className="flex items-center pl-6 basis-1/3 ">
                <li>
                    <ColorSelector />
                </li>
                <li className="ml-auto">
                    <LanguageSelector />
                </li>
            </ul>
        </header>
    )
}
//THANKS Howdy from coolors.co [https://fabrizio.io/, https://coolors.co/]
export default Header

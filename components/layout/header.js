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
import HeaderLink from './headerLink'

const Header = () => {
    const windowWidth = useWindowWidth()
    const { pathname } = useRouter()

    const [navState, setNavState] = useState(false)

    return (
        <header className="fixed z-10 flex items-center w-full px-4 text-gray-800 bg-gray-300 shadow-lg dark:shadow-md sm:px-12 h-14 dark:bg-gray-900 dark:text-gray-200 xl:static xl:flex-col xl:h-screen xl:p-0 dark:shadow-black shadow-gray-500">
            <nav className="h-full basis-2/3 sm:basis-4/5 xl:basis-0 xl:h-fit xl:w-full">
                <ul className="flex items-center h-full gap-4 sm:gap-8 xl:flex-col xl:gap-0">
                    <HeaderLink href="/" text="About me" />
                    <HeaderLink href="/projects" text="Proyectos" />
                    <HeaderLink href="/skills" text="Skills" />
                </ul>
            </nav>
            <ul className="flex items-center pl-6 basis-1/3 sm:basis-1/5 xl:basis-0 xl:px-4 xl:w-full xl:pb-4 xl:pt-8 xl:pl-8 2xl:pl-10 xl:justify-start">
                <li className="xl:mr-6">
                    <ColorSelector />
                </li>
                <li className="ml-auto xl:m-0 ">
                    <LanguageSelector />
                </li>
            </ul>
        </header>
    )
}
//THANKS Howdy from coolors.co [https://fabrizio.io/, https://coolors.co/]
export default Header

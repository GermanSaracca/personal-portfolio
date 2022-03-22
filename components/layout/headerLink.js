import { NavLink } from '../NavLink'
import { useRouter } from 'next/router'

const HeaderLink = ({ href, text }) => {
    const { pathname } = useRouter()

    return (
        <li className="relative grid h-full place-items-center sm:px-4 xl:w-full xl:h-20 2xl:h-24 xl:justify-items-start xl:pl-8 2xl:pl-10">
            <NavLink
                href={href}
                exact
                className={`xl:text-xl 2xl:text-2xl  py-2 dark:lg:hover:text-sky-400 lg:hover:text-sky-600 lg:transition lg:duration-200 ${
                    pathname === href ? 'dark:lg:text-sky-400 lg:text-sky-600' : ''
                }`}
            >
                {text}
            </NavLink>
            <span
                className={
                    pathname === href
                        ? 'absolute bottom-0 h-1 rounded-tr-md rounded-tl-md animate-widthFull duration-200 dark:bg-sky-400 bg-sky-600 xl:left-0 xl:w-[.30rem] xl:rounded-none xl:top-0 xl:animate-none xl:h-full xl:rounded-tr-md xl:rounded-br-md'
                        : 'absolute bottom-0 w-0 h-1 duration-200 dark:bg-sky-400 bg-sky-600 xl:left-0 xl:w-[.30rem] xl:h-0 xl:rounded-tr-md xl:rounded-br-md xl:rounded-none rounded-tr-md rounded-tl-md'
                }
            ></span>
        </li>
    )
}
export default HeaderLink

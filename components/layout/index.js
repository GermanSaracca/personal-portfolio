import { Fragment } from 'react'
import Header from './header'

const Layout = ({ children }) => {
    // xl:grid-cols-[12%_88%]
    return (
        <div className="flex flex-col xl:grid xl:grid-cols-[12%_88%] xl:h-screen xl:max-h-screen ">
            <Header />
            <main className="p-8 text-gray-800 bg-gray-200 sm:p-12 sm:px-20 mt-14 xl:m-0 xl:p-16 2xl:px-24 xl:h-screen xl:max-h-screen xl:overflow-y-auto dark:bg-gray-700 dark:text-gray-200">
                {children}
            </main>
        </div>
    )
}

export default Layout

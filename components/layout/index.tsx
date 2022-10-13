import React from 'react'
import GoUpButton from '../GoUpButton'
import Header from './header'
import IntroAnimation from '../IntroAnimation'

interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className="flex flex-col bg-gray-200 dark:bg-gray-800 min-h-screen">
            <Header />

            <main className="text-gray-800 xl:m-0 dark:text-gray-200 overflow-x-hidden">{children}</main>

            <GoUpButton />

            {/* INTRO ANIMATION - ONLY DESKTOP */}
            <IntroAnimation />
        </div>
    )
}

export default Layout

import { Fragment } from 'react'
import Header from './header'

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col">
            <Header />
            <main className="p-4 mt-14">{children}</main>
        </div>
    )
}

export default Layout

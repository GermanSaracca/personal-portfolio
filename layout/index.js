import Header from './header'
import Footer from './footer'
import { LanguageProvider } from '../context/LanguageProvider'
import { ColorThemeProvider } from '../context/ThemeProvider'

const Layout = ({ children }) => {
  return (
    <LanguageProvider>
      <ColorThemeProvider>
        <div className="global-wrapper">
          <Header />
          <main>{children}</main>
        </div>
      </ColorThemeProvider>
    </LanguageProvider>
  )
}

export default Layout

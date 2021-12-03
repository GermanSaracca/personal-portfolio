import Header from './header'
import Footer from './footer'
import { LanguageProvider } from '../context/LanguageProvider'
import { ColorThemeProvider } from '../context/ThemeProvider'

const Layout = ({ children }) => {
  return (
    <LanguageProvider>
      <ColorThemeProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </ColorThemeProvider>
    </LanguageProvider>
  )
}

export default Layout

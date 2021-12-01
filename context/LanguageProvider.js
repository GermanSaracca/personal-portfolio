//Create context that will be used to provide language
const LanguageContext = React.createContext()

const LanguageProvider = (props) => {
  const [language, setLanguage] = useState('es')

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  )
}

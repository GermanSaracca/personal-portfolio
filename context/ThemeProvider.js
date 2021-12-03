import { createContext, useState, useEffect } from 'react'
//Create a context for color theme provider
export const ColorThemeContext = createContext({})

export const ColorThemeProvider = ({ children }) => {
  const [colorTheme, setColorTheme] = useState('funny-light')

  const colors = ['skyblue', 'funny-light', 'dark']

  useEffect(() => {
    setColorTheme(
      window.matchMedia('(prefers-color-scheme: light)').matches
        ? 'funny-light'
        : 'skyblue'
    )
  }, [])

  useEffect(() => {
    console.log({ colorTheme })
  }, [colorTheme])
  //TODO Agregar transition al elemento que obtenga la clase que aplica el color

  return (
    <ColorThemeContext.Provider value={{ colorTheme, setColorTheme, colors }}>
      {children}
    </ColorThemeContext.Provider>
  )
}

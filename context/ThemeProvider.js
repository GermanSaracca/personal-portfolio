import { createContext, useState, useEffect } from 'react'
//Create a context for color theme provider
export const ColorThemeContext = createContext({})

export const ColorThemeProvider = ({ children }) => {
  const [colorTheme, setColorTheme] = useState('dark')

  const colors = ['light', 'dark']

  const palettes = {
    light: [
      { name: 'color-background', value: '#fffffe' },
      { name: 'color-secondary', value: '#6246ea' },
      { name: 'color-tertiary', value: '#e45858' },
      { name: 'color-headline', value: '#2b2c34' },
      { name: 'color-text', value: '#2b2c34' },
      { name: 'color-stroke', value: '#2b2c34' },
    ],
    dark: [
      { name: 'color-background', value: '#16161a' },
      { name: 'color-secondary', value: '#7f5af0' },
      { name: 'color-tertiary', value: '#2cb67d' },
      { name: 'color-headline', value: '#fffffe' },
      { name: 'color-text', value: '#94a1b2' },
      { name: 'color-stroke', value: '#010101' },
    ],
  }
  //Set the color theme based on the user preference
  useEffect(() => {
    setColorTheme(
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    )
  }, [])

  // Client-side-only code
  let darkMode =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-color-scheme: dark)')
      : null

  useEffect(() => {
    darkMode.onchange = () => {
      setColorTheme(
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      )
    }
  }, [])

  //Set new root custom properties for the color theme
  useEffect(() => {
    const root = document.documentElement

    palettes[colorTheme].forEach(({ name, value }) => {
      root.style.setProperty(`--${name}`, value)
    })
  }, [colorTheme])

  return (
    <ColorThemeContext.Provider
      value={{ colorTheme, setColorTheme, colors, palettes }}
    >
      {children}
    </ColorThemeContext.Provider>
  )
}

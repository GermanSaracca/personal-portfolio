import { createContext, useState, useEffect } from 'react'
//Create a context for color theme provider
export const ColorThemeContext = createContext({})

export const ColorThemeProvider = ({ children }) => {
  const [colorTheme, setColorTheme] = useState('dark')

  const colors = ['skyblue', 'light', 'dark', 'black_yellow']

  const palettes = {
    skyblue: [
      { name: 'palette_100', value: '#012a4a' },
      { name: 'palette_90', value: '#013a63' },
      { name: 'palette_80', value: '#01497c' },
      { name: 'palette_70', value: '#014f86' },
      { name: 'palette_60', value: '#2a6f97' },
      { name: 'palette_50', value: '#2c7da0' },
      { name: 'palette_40', value: '#468faf' },
      { name: 'palette_30', value: '#61a5c2' },
      { name: 'palette_20', value: '#89c2d9' },
      { name: 'palette_10', value: '#d9f1f9' },
    ],
    light: [
      { name: 'palette_100', value: '#ffffff' },
      { name: 'palette_90', value: '#e3e3e3' },
      { name: 'palette_80', value: '#c6c6c6' },
      { name: 'palette_70', value: '#aaaaaa' },
      { name: 'palette_60', value: '#8e8e8e' },
      { name: 'palette_50', value: '#717171' },
      { name: 'palette_40', value: '#555555' },
      { name: 'palette_30', value: '#393939' },
      { name: 'palette_20', value: '#1c1c1c' },
      { name: 'palette_10', value: '#000000' },
    ],
    dark: [
      { name: 'palette_100', value: '#000000' },
      { name: 'palette_90', value: '#1c1c1c' },
      { name: 'palette_80', value: '#393939' },
      { name: 'palette_70', value: '#555555' },
      { name: 'palette_60', value: '#717171' },
      { name: 'palette_50', value: '#8e8e8e' },
      { name: 'palette_40', value: '#aaaaaa' },
      { name: 'palette_30', value: '#c6c6c6' },
      { name: 'palette_20', value: '#e3e3e3' },
      { name: 'palette_10', value: '#ffffff' },
    ],
    black_yellow: [
      { name: 'palette_100', value: '#000000' },
      { name: 'palette_90', value: '#1c1c1c' },
      { name: 'palette_80', value: '#2b2b2b' },
      { name: 'palette_70', value: '#3f3f3f' },
      { name: 'palette_60', value: '#4f4f4f' },
      { name: 'palette_50', value: '#656500' },
      { name: 'palette_40', value: '#888800' },
      { name: 'palette_30', value: '#c2c200' },
      { name: 'palette_20', value: '#e1e100' },
      { name: 'palette_10', value: '#ffff00' },
    ],
  }
  //Set the color theme based on the user preference
  useEffect(() => {
    setColorTheme(
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : window.matchMedia('(prefers-color-scheme: light)').matches
        ? 'light'
        : 'skyblue'
    )
  }, [])
  //Set new root custom properties for the color theme
  useEffect(() => {
    const root = document.documentElement

    palettes[colorTheme].forEach(({ name, value }) => {
      root.style.setProperty(`--${name}`, value)
    })
  }, [colorTheme])
  //TODO Add transition to element that changes color theme

  return (
    <ColorThemeContext.Provider value={{ colorTheme, setColorTheme, colors }}>
      {children}
    </ColorThemeContext.Provider>
  )
}

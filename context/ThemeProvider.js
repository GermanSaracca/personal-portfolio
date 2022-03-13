import { createContext, useState, useEffect } from 'react'
//Create a context for color theme provider
export const ColorThemeContext = createContext({})

export const ColorThemeProvider = ({ children }) => {
    const [colorTheme, setColorTheme] = useState('dark')

    const colors = ['light', 'dark']

    //Set the color theme based on the user preference
    useEffect(() => {
        setColorTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    }, [])

    // Client-side-only code
    let darkMode = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)') : null

    useEffect(() => {
        darkMode.onchange = () => {
            setColorTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        }
    }, [])

    useEffect(() => {
        if (colorTheme === 'light') {
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
        }
    }, [colorTheme])

    return (
        <ColorThemeContext.Provider value={{ colorTheme, setColorTheme, colors }}>
            {children}
        </ColorThemeContext.Provider>
    )
}

import { useContext } from 'react'
import { ColorThemeContext } from '../context/ThemeProvider'
import { MdBrightnessLow, MdBrightnessHigh } from 'react-icons/md'

const ColorSelector = () => {
    const { colorTheme, setColorTheme } = useContext(ColorThemeContext)

    const changeTheme = () => {
        setColorTheme(colorTheme === 'light' ? 'dark' : 'light')
    }

    return (
        <button className="grid place-items-center" onClick={changeTheme}>
            {colorTheme === 'light' ? <MdBrightnessLow size="1.5rem" /> : <MdBrightnessHigh size="1.5rem" />}
        </button>
    )
}

export default ColorSelector

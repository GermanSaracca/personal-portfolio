import { useTranslation } from 'next-i18next'
import { useColorThemeContext } from '../context/ThemeProvider'
import { MdBrightnessLow, MdBrightnessHigh } from 'react-icons/md'

const ColorSelector = () => {
    const { colorTheme, setColorTheme } = useColorThemeContext()

    const { t } = useTranslation('common')

    const changeTheme = () => {
        setColorTheme(colorTheme === 'light' ? 'dark' : 'light')
    }

    return (
        <button
            className="grid place-items-center text-2xl transition duration-200 ease-in-out xl:text-3xl dark:hover:text-sky-400 hover:text-sky-600"
            onClick={changeTheme}
        >
            {colorTheme === 'light' ? <MdBrightnessLow size="1em" /> : <MdBrightnessHigh size="1em" />}
            <span className="sr-only">
                {colorTheme === 'light' ? t('header.switch_to_dark_mode') : t('header.switch_to_light_mode')}
            </span>
        </button>
    )
}

export default ColorSelector

import { useContext } from 'react'
import { ColorThemeContext } from '../context/ThemeProvider'

const ThemeColorPicker = () => {
  const { colorTheme, setColorTheme, colors } = useContext(ColorThemeContext)

  const changeTheme = (e) => setColorTheme(e.target.id)

  return (
    <form className="theme-color-picker">
      <fieldset>
        <legend>Choose your favorite theme color</legend>
        <div className="radio-group">
          <input
            type="radio"
            id={colors[0]}
            name="theme-picker"
            onChange={changeTheme}
            checked={colorTheme === colors[0]}
          />
          <label htmlFor={colors[0]}>{colors[0]}</label>
        </div>
        <div className="radio-group">
          <input
            type="radio"
            id={colors[1]}
            name="theme-picker"
            onChange={changeTheme}
            checked={colorTheme === colors[1]}
          />
          <label htmlFor={colors[1]}>{colors[1]}</label>
        </div>
        <div className="radio-group">
          <input
            type="radio"
            id={colors[2]}
            name="theme-picker"
            onChange={changeTheme}
            checked={colorTheme === colors[2]}
          />
          <label htmlFor={colors[2]}>{colors[2]}</label>
        </div>
      </fieldset>
    </form>
  )
}

export default ThemeColorPicker

import { useContext } from 'react'
import { ColorThemeContext } from '../context/ThemeProvider'

const ColorSelector = () => {
  const { colorTheme, setColorTheme, colors } = useContext(ColorThemeContext)

  const changeTheme = (e) => setColorTheme(e.target.id)

  return (
    <div className="color-selector">
      <div className="color-selector__title">
        <h2>Color Theme</h2>
      </div>
      <div className="color-selector__options">
        {colors.map((color) => (
          <div className="radio-group" key={color}>
            <input
              type="radio"
              id={color}
              name="theme-picker"
              onChange={changeTheme}
              checked={colorTheme === color}
            />
            <label htmlFor={color}>{color}</label>
            <span></span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ColorSelector

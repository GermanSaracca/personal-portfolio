import { useContext } from 'react'
import { ColorThemeContext } from '../context/ThemeProvider'

const ColorSelector = () => {
  const { colorTheme, setColorTheme, colors } = useContext(ColorThemeContext)

  const changeTheme = (e) => setColorTheme(e.target.id)

  return (
    <div className="color-selector">
      <div className="color-selector__title" id="theme-color-title">
        <h3>Pick your preferred color pallette</h3>
      </div>
      <div
        className="color-selector__options"
        aria-labelledby="theme-color-title"
      >
        {colors.map((color) => (
          <label className="radio-label" key={color}>
            <input
              type="radio"
              id={color}
              name="theme-picker"
              onChange={changeTheme}
              checked={colorTheme === color}
            />
            {color}
          </label>
        ))}
      </div>
    </div>
  )
}

export default ColorSelector

import React from 'react'
import { getThemeContext } from '../contexts/ThemeSwitch'

const ThemeSwitcher = () => {
  const t = getThemeContext();
  return (
    <div>
      {t.themeMode == 'light' && <button onClick={() => t.setThemeMode('dark')}>Dark</button>}
      {t.themeMode == 'dark' && <button onClick={() => t.setThemeMode('light')}>Ligth</button>}
    </div>
  )
}

export default ThemeSwitcher
import React from 'react'
import { useTheme } from '../Context/ThemeProvider'

const ThemeButton = () => {
    const {theme, toggleTheme} = useTheme();
  return (
    <div>
      <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff'
      }}
      >
        Current Mode : {theme.toUpperCase()}
      </button>
    </div>
  )
}

export default ThemeButton

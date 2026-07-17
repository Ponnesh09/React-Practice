import React from 'react'
import { ThemeProvider } from './Context/ThemeProvider'

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <div className='app-container'>
          <h1>Welcome to my App</h1>

          
        </div>
      </ThemeProvider>
     
    </div>
  )
}

export default App

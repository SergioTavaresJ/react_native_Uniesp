import React from 'react'
import { ThemeProvider } from './src/context/ThemeContext'
import MainComponent from './src/components/MainComponent'

const App = () => {
  return (

    <ThemeProvider>
      <MainComponent />
    </ThemeProvider>

  )
}

export default App
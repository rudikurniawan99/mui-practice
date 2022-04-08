import React from 'react'
import MainApp from './pages/MainApp'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'

const theme = createTheme({
  palette: {
    primary: {
      main: '#e2b326',
      contrastText: '#000'
    },
    background: {
      paper: '#0f172a',
      default: '#0f172a'
    },
    text: {
      primary: '#ff0000'
    }
  },
})

const App = () => (
  
  <BrowserRouter>
    <ThemeProvider
      theme={theme}
    >
      <CssBaseline />
      <MainApp/>
    </ThemeProvider>
  </BrowserRouter>
)

export default App

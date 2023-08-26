import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from "./styles/theme"
import { GlobalStyles } from './styles/GlobalStyles.jsx'
import { AppProvider } from './contexts/GlobalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <React.StrictMode>
      <ThemeProvider theme={theme} >
        <GlobalStyles />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  </AppProvider>
)

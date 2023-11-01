import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Theme from './styles/theme.jsx'
import { GlobalStyles } from './styles/GlobalStyle.jsx'
import { AppProvider } from './contexts/GlobalContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <React.StrictMode>
      <Theme>
        <GlobalStyles />
        <BrowserRouter>
          <App />   
        </BrowserRouter>
      </Theme>
    </React.StrictMode>
   </AppProvider>
)

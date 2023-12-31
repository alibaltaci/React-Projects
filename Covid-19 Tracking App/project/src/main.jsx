import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyles } from './styles/GlobalStyles.jsx'
import Theme from './styles/theme.jsx'
import { AppProvider } from './contexts/GlobalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <React.StrictMode>
      <Theme>
        <GlobalStyles />
        <App />
      </Theme>
    </React.StrictMode>,
  </AppProvider>
)

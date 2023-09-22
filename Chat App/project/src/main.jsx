import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Theme from './styles/theme.jsx'
import { GlobalStyles } from './styles/GlobalStyle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyles />
      <App />   
    </Theme>
  </React.StrictMode>,
)
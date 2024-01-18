import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import routes from './utils'
import "./assets/css/tailwind.css"
import ReduxProvider from './store'

// iki kere render edilmesinin sebebi Strict modudur

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReduxProvider>
    <RouterProvider router={routes} />
  </ReduxProvider>
)

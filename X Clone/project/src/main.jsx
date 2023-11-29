import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import routes from './routes'
import "./assets/css/tailwind.css"
import ReduxProvider from './store'

// {/*   */}  iki kere render edilmesinin sebebi bu moddur. 

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReduxProvider>
    <RouterProvider router={routes} />
  </ReduxProvider>
)

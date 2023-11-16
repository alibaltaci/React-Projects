import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import routes from './routes'
import "./assets/css/tailwind.css"

// {/* <React.StrictMode>  */}  iki kere render edilmesinin sebebi bu moddur. 

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)
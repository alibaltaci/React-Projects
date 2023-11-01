import { useRoutes } from "react-router-dom"
import  routes from "./Routes"
// import Login from "./pages/Login"
// import Register from "./pages/Register"
// import Home from "./pages/Home"
// import { RegisterFormProvider } from "./contexts"
// import routes from "./Routes"

function App() {
  return useRoutes(routes)
}

export default App

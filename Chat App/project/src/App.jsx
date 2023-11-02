import { useRoutes } from "react-router-dom"
import  routes from "./Routes"
import { useGlobalContext } from "./contexts/GlobalContext"
// import Login from "./pages/Login"
// import Register from "./pages/Register"
// import Home from "./pages/Home"
// import { RegisterFormProvider } from "./contexts"
// import routes from "./Routes"

function App() {

  const currentUser = useGlobalContext();

  console.log( currentUser )
  
  return useRoutes(routes)
}

export default App

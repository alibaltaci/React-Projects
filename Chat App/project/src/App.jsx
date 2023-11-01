import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import NotFound from "./pages/NotFound"
// import Login from "./pages/Login"
// import Register from "./pages/Register"
// import Home from "./pages/Home"
// import { RegisterFormProvider } from "./contexts"
// import routes from "./Routes"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={ <Home /> } />
          <Route path="login" element={ <LoginPage /> } />
          <Route path="register" element={ <RegisterPage /> } />
          <Route parh="/*" element={ <NotFound /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

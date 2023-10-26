// import Login from "./pages/Login"
import Register from "./pages/Register"
// import Home from "./pages/Home"
import { RegisterFormProvider } from "./contexts"

function App() {

  return (
    <>
      {/* <Home /> */}
      <RegisterFormProvider>
        <Register />
      </RegisterFormProvider>
      {/* <Login /> */}
    </>
  )
}

export default App

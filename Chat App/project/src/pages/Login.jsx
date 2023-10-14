import { login } from "../data/data.json"
import { CommonForm } from "../components"


function Login() {

  return(
    <CommonForm data={login} />
  )
}

export default Login
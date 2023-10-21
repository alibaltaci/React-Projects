import { login } from "../data/data.json"
import { CommonForm } from "../components"
import * as Yup from "yup"

function Login() {

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("email").required("Name"),
    password: Yup.string().min(6, "wrong").required("password")
  })

  const initialValues = {
    email: "",
    password: ""
  }

  const onSubmit = ( values, {resetForm} ) => {
    try{
      console.log( {values} )
      resetForm()
    }
    catch(error){
      console.log(error)
    }
  }

  return(
      <CommonForm 
        data={login} 
        onSubmit={onSubmit} 
        validationSchema={validationSchema} 
        initialValues={initialValues} 
      />
  )
}

export default Login
import { login } from "../data/data.json"
import { CommonForm } from "../components"
import * as Yup from "yup"

function Login() {

  // const message = ({value, type}) => {

  //   return type === "valid"
  //     ? login.formElement.find(el => el.name === value).errorMessageValid
  //     : login.formElement.find(el => el.name === value).errorMessageRequired
  // }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Please Enter a Valid Email Address. (ex: john@balloon.com").required("Please Enter Your Email"),
    password: Yup.string().min(6, "Please Enter Minimum 6 Characters").required("Please Enter Your Password")
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
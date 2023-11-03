import { login } from "../../data/data.json"
import { CommonForm } from ".."
import * as Yup from "yup"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase"

export const LoginForm = () => {

  const [errorMessage, setErrorMessage] = useState(false)

  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Please Enter a Valid Email Address. (ex: john@balloon.com)").required("Please Enter Your Email"),
    password: Yup.string().min(6, "Please Enter Minimum 6 Characters").required("Please Enter Your Password")
  })

  const initialValues = {
    email: "",
    password: ""
  }

  const onSubmit = ( values, {resetForm} ) => {

    try{
      const {email, password} = values;
      signInWithEmailAndPassword(auth, email, password)
      .then( () => { 
        navigate("/")
        resetForm()
      })
      .catch( err =>{
        console.log(err.message)
        setErrorMessage(err.code)
      }  )
    }
    catch(error){
      console.log( error)
    }
  }

  return(
      <CommonForm 
        data={login} 
        onSubmit={onSubmit} 
        validationSchema={validationSchema} 
        initialValues={initialValues} 
        invalidError={errorMessage}
      />
  )
}
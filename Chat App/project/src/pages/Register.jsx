import { register } from "../data/data.json"
import { CommonForm } from "../components"
import * as Yup from "yup"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";


function Register() {

    const [errorMessage, setErrorMessage] = useState(false)

    const validationSchema = Yup.object().shape({
        displayName:  Yup.string().required("Please Enter a Name"),
        email: Yup.string().email("Please Enter a Valid Email Address").required("Please Enter Your Email Address"),
        password: Yup.string().min(6, "Please Enter Minimum 6 Characters").required("Please Enter a Password"),
        passwordConfirmation: Yup.string().oneOf([Yup.ref("password"), null], "The Passwords You Entered Are Not The Same").required("Please Re-enter The Password")
    })

    const initialValues = {
        displayName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        profilePhoto: undefined
    }

    const onSubmit = ( values, {resetForm} ) => {
        try{
            // https://firebase.google.com/docs/auth/web/password-auth
            const { email, password } = values


            // Use Firebase to create a user 
            createUserWithEmailAndPassword(auth, email, password)
                // eslint-disable-next-line no-unused-vars
                .then((userCredential) => {
                    // User signed up successfully
                    // const user = userCredential.user;
                    setErrorMessage(false)

                    // reset form ()
                    resetForm();
                })
                // eslint-disable-next-line no-unused-vars
                .catch((error) => {
                    // const errorCode = error.code;
                    // const errorMessage = error.message;

                    setErrorMessage(error.code === "auth/mail-already-in-use" ? "Email Already In Use" : true)
                })

        }
        catch(error){
            console.log(error)
        }
    }

    return(
            <CommonForm 
                data={register} 
                onSubmit={onSubmit} 
                validationSchema={validationSchema} 
                initialValues={initialValues} 
                errorMessage={errorMessage} 
            />
    )
}

export default Register
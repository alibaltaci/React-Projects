import { register } from "../data/data.json"
import { CommonForm } from "../components"
import * as Yup from "yup"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function Register() {

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

    const onSubmit= ( values, {resetForm} ) => {
        try{
            console.log( {values} )
            resetForm()
        }
        catch(error){
            console.log(error)
        }
    }

    // https://firebase.google.com/docs/auth/web/password-auth

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
    return(
            <CommonForm data={register} onSubmit={onSubmit} validationSchema={validationSchema} initialValues={initialValues} />
    )
}

export default Register
import { register } from "../data/data.json"
import { CommonForm } from "../components"
import { useState } from "react";
import * as Yup from "yup"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


function Register() {

    const [errorMessage, setErrorMessage] = useState(false)
    const [stErrorMessage, setSTErrorMessage] = useState(false)

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
            const { email, password, profilePhoto, displayName } = values


            // Use Firebase to create a user 
            createUserWithEmailAndPassword(auth, email, password)
                // eslint-disable-next-line no-unused-vars
                .then((userCredential) => {
                    // User signed up successfully
                    // const user = userCredential.user;

                    // upload file 
                    const storageRef = ref(storage, displayName);

                    const uploadTask = uploadBytesResumable(storageRef, profilePhoto);
    
                    // Register three observers:
                    uploadTask.on('state_changed', 
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                        switch (snapshot.state) {
                            case 'paused':
                                console.log('Upload is paused');
                                break;
                            case 'running':
                                console.log('Upload is running');
                                break;
                        }
                    },
                    // eslint-disable-next-line no-unused-vars
                    (error) => {
                        // Handle unsuccessful uploads
                        setSTErrorMessage(true)
                    }, 
                    () => {
                        // Handle successful uploads on complete
                        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        });
                    }
                    );

                    setErrorMessage(false)
                    setSTErrorMessage(false)

                    // reset form ()
                    resetForm();
                })
                // eslint-disable-next-line no-unused-vars
                .catch((error) => {
                    // const errorCode = error.code;
                    // const errorMessage = error.message;

                    setErrorMessage(error.code === "auth/email-already-in-use" && "Email Already In Use")
                    setSTErrorMessage(error.code === "auth/network-request-failed" && true)
                })
        }
        catch(error){
            setSTErrorMessage(true)
        }
    }

    return(
            <CommonForm 
                data={register} 
                onSubmit={onSubmit} 
                validationSchema={validationSchema} 
                initialValues={initialValues} 
                errorMessage={errorMessage} 
                stErrorMessage={stErrorMessage}
            />
    )
}

export default Register
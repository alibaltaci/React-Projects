import { register } from "../../data/data.json"
import { CommonForm } from ".."
import { useState } from "react";
import * as Yup from "yup"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { 
        // collection, 
        // getDocs, 
        doc, 
        setDoc } from "firebase/firestore";
import { useGlobalContext } from "../../contexts/GlobalContext";

export const RegisterForm = () => {

    const [errorMessage, setErrorMessage] = useState(false)
    const [stErrorMessage, setSTErrorMessage] = useState(false)

    const { setFileName, setSelectedFile } = useGlobalContext()

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

    // const isDisplayNameUnique = (name) => {
    //        getDocs(collection(db, "users"))
    //        .then( (querySnapshot) => {
    //             const names = querySnapshot.docs.map( doc => doc.data().displayName) 
    //             return !names.includes(name)
    //        })
    // }

    const onSubmit = async( values, {resetForm} ) => {
        try{
            // https://firebase.google.com/docs/auth/web/password-auth
            const { email, password, profilePhoto, displayName } = values

            // Use Firebase to create a user 
            const res =  await createUserWithEmailAndPassword(auth, email, password)

            // upload file 
            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, profilePhoto);

            // Register three observers:
            uploadTask.on(
            // eslint-disable-next-line no-unused-vars
            (error) => {
                // Handle unsuccessful uploads
                setSTErrorMessage(true)
            }, 
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
                    await updateProfile(res.user, {
                        displayName,
                        profilePhoto: downloadURL,

                    })
                    await setDoc( doc(db, "users", res.user.uid), {
                        uid: res.user.uid,
                        displayName,
                        email,
                        profilePhoto: downloadURL
                    })
                });
            });


            setErrorMessage(false)
            setSTErrorMessage(false)

            // reset form ()
            resetForm();

            setFileName(null)
            setSelectedFile(null)

        }
        catch(error){
            // const errorCode = error.code;
            // const errorMessage = error.message;

            setErrorMessage(error.code === "auth/email-already-in-use" && "Email Already In Use")
            setSTErrorMessage(error.code === "auth/network-request-failed" && true)
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
